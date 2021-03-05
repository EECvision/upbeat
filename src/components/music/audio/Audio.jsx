import React, { useState } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import AudioContainer from './Audio-container';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectMusicList,
  selectSearchEntry,
  selectTogglePlaylist,
} from '../../../redux/music/music.selectors';

import 'react-jinke-music-player/assets/index.css'


const Audio = ({ musicList, category, searchEntry, togglePlaylist }) => {
  const [playList, setPlayList] = useState([]);
  const regex = new RegExp(searchEntry.toLowerCase());

  const musicCategory = musicList
    .filter(file => file.fileMetadata.customMetadata.category === category)
    .filter(file => regex.test(file.fileMetadata.name.toLowerCase()))

  return (
    <div className="relative w-full flex items-center justify-end">
      {
        togglePlaylist ?

          <ReactJkMusicPlayer
            audioLists={playList}
            defaultPosition={{ top: 0, right: 0 }}
            remember={true}
            mode="full"
            showMediaSession
            glassBg={true}
            theme="light"
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
              addToPlayList={(item => setPlayList([...playList, item]))}
            />
        }
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  musicList: selectMusicList,
  searchEntry: selectSearchEntry,
  togglePlaylist: selectTogglePlaylist
})

export default connect(mapStateToProps)(Audio);