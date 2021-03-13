import React, { useState } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import AudioContainer from './Audio-container';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  updatePlaylist,
  setIsAddingToPlaylist,
  togglePlaylist,
} from '../../../redux/music/music.actions';
import {
  selectMusicList,
  selectSearchEntry,
  selectTogglePlaylist,
  selectPlaylist,
  selectIsAddingToPlaylist,
  selectIsFetching
} from '../../../redux/music/music.selectors';

import 'react-jinke-music-player/assets/index.css'


const Audio = ({
  musicList, category, searchEntry, togglePlaylist,
  playlist, updatePlaylist, setIsAddingToPlaylist,
  isAddingToPlaylist, setTogglePlaylist, isFetching
}) => {
  const [isPlaylist, setisPlaylist] = useState(true);

  const regex = new RegExp(searchEntry.toLowerCase());

  const musicCategory = musicList
    .filter(file => file.fileMetadata.customMetadata.category === category)
    .filter(file => regex.test(file.fileMetadata.name.toLowerCase()))

  return (
    <div className="relative w-full flex items-center justify-end">
      {
        togglePlaylist ?

          <ReactJkMusicPlayer
            audioLists={playlist}
            defaultPosition={{ top: 0, right: 0 }}
            remember={true}
            mode="full"
            showMediaSession
            glassBg={true}
            theme="dark"
            autoHiddenCover={true}
            onAudioListsChange={(a, newlist, c) => {
              if (!isAddingToPlaylist) {
                updatePlaylist(newlist)
              }
              setIsAddingToPlaylist()
            }}
          />
          : null
      }
      <div className="w-full">
        {
          musicCategory.length === 0 && isFetching === false
            ?
            <div className="w-full flex items-center justify-center ">
              <div className="w-auto rounded-2xl text-purple-500 shadow-lg text-lg px-6">No item found</div>
            </div>
            :
            <AudioContainer
              musicCategory={musicCategory}
            />
        }
      </div>
      {
        isPlaylist ?
          <div onClick={() => { setTogglePlaylist(true); setisPlaylist(false) }}
            className="fixed z-10 right-0 -top-0 w-12 h-12 mt-4 flex items-center justify-center cursor-pointer rounded-full bg-gray-200">
            <i className="animate-bounce text-green-700 font-bold fa fa-headphones" aria-hidden="true"></i>
          </div>
          : null
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  musicList: selectMusicList,
  searchEntry: selectSearchEntry,
  togglePlaylist: selectTogglePlaylist,
  playlist: selectPlaylist,
  isAddingToPlaylist: selectIsAddingToPlaylist,
  isFetching: selectIsFetching
})

const mapDispatchToProps = dispatch => ({
  updatePlaylist: newlist => dispatch(updatePlaylist(newlist)),
  setIsAddingToPlaylist: () => dispatch(setIsAddingToPlaylist()),
  setTogglePlaylist: state => dispatch(togglePlaylist(state))
})
export default connect(mapStateToProps, mapDispatchToProps)(Audio);