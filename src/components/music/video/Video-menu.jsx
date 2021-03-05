import React from 'react';
import VideoItem from './Video-item.component';

const VideoMenu = ({ musicCategory }) => {

  return (
    <div className="w-full flex flex-wrap justify-evenly items-center px-2 sm:px-0">
      {
        musicCategory
          .map((file, idx) => (
            <VideoItem key={idx} {...file} />
          ))
      }
    </div>
  )
}

export default VideoMenu;