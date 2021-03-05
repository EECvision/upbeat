import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import AudioContainer from './Audio-container';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { 
  updatePlaylist, 
  setIsAddingToPlaylist 
} from '../../../redux/music/music.actions';
import {
  selectMusicList,
  selectSearchEntry,
  selectTogglePlaylist,
  selectPlaylist,
  selectIsAddingToPlaylist
} from '../../../redux/music/music.selectors';

import 'react-jinke-music-player/assets/index.css'


const Audio = ({ musicList, category, 
                searchEntry, togglePlaylist, 
                playlist, updatePlaylist, 
                setIsAddingToPlaylist,
                isAddingToPlaylist
              }) => {
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
            onAudioListsChange={(a, newlist, c)=>{
              if(!isAddingToPlaylist){
                updatePlaylist(newlist) 
              }
              setIsAddingToPlaylist()
            }}
          />
          : null
      }
      <div className="w-full">
        {
          musicCategory.length === 0
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
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  musicList: selectMusicList,
  searchEntry: selectSearchEntry,
  togglePlaylist: selectTogglePlaylist,
  playlist: selectPlaylist,
  isAddingToPlaylist: selectIsAddingToPlaylist
})

const mapDispatchToProps = dispatch =>({
  updatePlaylist: newlist => dispatch(updatePlaylist(newlist)),
  setIsAddingToPlaylist: ()=> dispatch(setIsAddingToPlaylist())
})
export default connect(mapStateToProps, mapDispatchToProps)(Audio);