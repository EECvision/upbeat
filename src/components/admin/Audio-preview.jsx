import React from 'react';

const AudioPreview = ({ url, metadata, img }) => {
  return (
    <div className="w-full h-24 flex justify-between items-end p-1 border border-black mb-6">
      <div className="w-full h-full flex items-start justify-between">
        {
          !img.url ? null 
          : 
          <img className="w-12 md:w-24 h-12 md:h-full mr-2" src={URL.createObjectURL(img.url)} alt="avatar" ></img>
        }
        {
          !url ? null
            :
            <div className="w-full h-full flex flex-col justify-between">
              <audio className="w-full h-12" controls src={URL.createObjectURL(url)} title={metadata.name}></audio>
              <div className="w-full flex items-end justify-between">
                <div>{metadata.name}</div>
                <div>{`${(metadata.size / 1049367).toFixed(2)} mb`}</div>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default AudioPreview