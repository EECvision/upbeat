import React, { useState } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import AudioContainer from './Audio-container';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectMusicList,
  selectSearchEntry,
  selectTogglePlaylist
} from '../../../redux/music/music.selectors';

import 'react-jinke-music-player/assets/index.css'


const Audio = ({ musicList, category, searchEntry, togglePlaylist }) => {
  const [playList, setPlayList] = useState([]);

  const musicCategory = musicList
    .filter(file => file.fileMetadata.customMetadata.category === category)
    .filter(file => file.fileMetadata.name.toLowerCase().includes(searchEntry.toLowerCase()));


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
          />
          : null
      }
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
  searchEntry: selectSearchEntry,
  togglePlaylist: selectTogglePlaylist
})

export default connect(mapStateToProps)(Audio);