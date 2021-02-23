import React, { useState } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import AudioMenu from './Audio-menu';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectMusicList,
  selectSearchEntry
} from '../../../redux/music/music.selectors';

import 'react-jinke-music-player/assets/index.css'


const Audio = ({ musicList, category, searchEntry }) => {
  console.log(musicList);
  const [playList, setPlayList] = useState([]);

  console.log(searchEntry);
  const musicCategory = musicList
  .filter(file => file.fileMetadata.customMetadata.category === category)
  .filter(file => file.fileMetadata.name.toLowerCase().includes(searchEntry.toLowerCase()));

  
  return (
    <div className="w-full flex items-start justify-start">
      <ReactJkMusicPlayer
        audioLists={playList}
        defaultPosition={{ top: 0, right: 0 }}
        remember={true}
        mode="full"
      />

      <div className="w-full">
        {
            musicCategory.length === 0
            ?
            <div className="w-full px-32 py-32 flex items-center justify-center">Nothing to display</div>
            :
            <AudioMenu
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