import React from 'react';
import AudioItem from './Audio-item.component';

const AudioMenu = ({ musicCategory, addToPlayList }) => {

  return (
    <div className="w-full flex flex-col items-center">
      {
        musicCategory
          .map((file, idx) => (
            <AudioItem
              key={idx} {...file}
              addToPlayList={addToPlayList}
            />
          ))
      }

    </div>
  )
}

export default AudioMenu;