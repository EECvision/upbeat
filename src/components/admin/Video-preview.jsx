import React from 'react';

const VideoPreview = ({ url, metadata, img }) => (
  <div className="w-full h-56 p-1 border border-black mb-6">
    <div className="relative w-full h-full flex flex-col items-start justify-start">
      <div className="absolute w-12 h-12">
        {
          !img.url ? null
            :
            <img className="w-12 h-12 border border-black" src={URL.createObjectURL(img.url)} alt="avatar" ></img>
        }
      </div>
      {
        !url ? null
          :
          <div className="w-full flex flex-col justify-between">
            <video className="w-full h-48" controls src={URL.createObjectURL(url)}></video>
            <div className="w-full flex items-center justify-between">
              <div>{metadata.name}</div>
              <div>{`${(metadata.size / 1049367).toFixed(2)} mb`}</div>
            </div>
          </div>
      }
    </div>
  </div>
)

export default VideoPreview;