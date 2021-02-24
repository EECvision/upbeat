import React, { useState } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import AudioContainer from './Audio-menu';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectMusicList,
  selectSearchEntry
} from '../../../redux/music/music.selectors';

import 'react-jinke-music-player/assets/index.css'


const Audio = ({ musicList, category, searchEntry }) => {

  const [playList, setPlayList] = useState([]);
  const [togglePlaylist, setTogglePlaylist] = useState(false);

  console.log(searchEntry);
  const musicCategory = musicList
    .filter(file => file.fileMetadata.customMetadata.category === category)
    .filter(file => file.fileMetadata.name.toLowerCase().includes(searchEntry.toLowerCase()));


  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {
        togglePlaylist ?

          <ReactJkMusicPlayer
            audioLists={playList}
            defaultPosition={{ top: 0, right: 0 }}
            remember={true}
            mode="full"
            showMediaSession
            glassBg={true}
          />
          : null
      }

      <div className="fixed top-48 w-full text-right pr-1 pt-1 z-10">
        <div onClick={() => setTogglePlaylist(!togglePlaylist)} className="w-auto cursor-pointer inline-flex flex-col items-center bg-gray-300 rounded-lg p-1">
          <div className="text-xs border-b border-pink-700 text-purple-600 font-medium">toggle Playlist</div>
          <i className="animate-pulse text-2xl text-purple-900 fas fa-arrow-alt-circle-down"></i>
        </div>
      </div>

      <div className="w-full">
        {
          musicCategory.length === 0
            ?
            <div className="w-full px-32 py-32 flex items-center justify-center">Nothing to display</div>
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
  searchEntry: selectSearchEntry
})

export default connect(mapStateToProps)(Audio);