import React from 'react';
import './audio-item.css';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'


const AudioItem = ({ fileUrl, fileMetadata, imageUrl, addToPlayList }) => {
  const handleClick = () => {
    addToPlayList({
      name: fileMetadata.name,
      musicSrc: fileUrl,
      cover: imageUrl,
      singer: fileMetadata.customMetadata.artistName
    })
  }
  return (
    <div className="w-full mb-8 text-sm md:text-base">
      {
        fileUrl.length === 0
          ?
          <div>No item found </div>
          :
          <React.Fragment>
            <div className="w-full flex flex-col lg:flex-row items-center sm:items-start lg:items-center justify-between py-2 px-4 md:border-l-4 border md:border-gray-500 md:rounded-l-lg shadow-xl">
              <div className="w-full lg:max-w-xl flex items-center justify-center">
                <img className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full" src={imageUrl} alt="poster" />
                <div className="ml-4 h-24 w-full flex flex-col items-center justify-evenly">
                  <div className="w-full flex items-center justify-between">
                    <div className="cursor-default text-gray-700 text-base"> {fileMetadata.name} </div>
                    <div className="w-24 ml-2 flex items-center justify-center ">
                      {`${(fileMetadata.size / 1049367).toFixed(2)} mb`}
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-start text-xs md:text-base">
                    <div className="font-medium text-gray-700 mr-4 text-base">share on: </div>
                    <div className="w-auto h-auto flex justify-start items-center pr-2 mr-2 text-pink-700 font-medium font-serif rounded-l-full border-b-2 sm:border-purple-800">
                      <FacebookShareButton
                        url={fileUrl}
                        quote={fileMetadata.name}
                      >
                        <FacebookIcon size={24} round={true} />
                      </FacebookShareButton>
                      <div className="hidden sm:block">facebook</div>
                    </div>
                    <div className="w-auto h-auto flex justify-start items-center pr-2 mr-2 text-pink-700 font-medium font-serif rounded-l-full border-b-2 sm:border-purple-800">
                      <WhatsappShareButton
                        title={fileMetadata.name}
                        url={fileUrl}
                      >
                        <WhatsappIcon size={24} round={true} />
                      </WhatsappShareButton>
                      <div className="hidden sm:block">whatsapp</div>
                    </div>
                    <div className="w-auto h-auto flex justify-start items-center pr-2 mr-2 text-pink-700 font-medium font-serif rounded-l-full border-b-2 sm:border-purple-800">
                      <TwitterShareButton
                        title={fileMetadata.name}
                        url={fileUrl}
                        hashtags={['music', 'rap', 'beats']}
                      >
                        <TwitterIcon size={24} round={true} />
                      </TwitterShareButton>
                      <div className="hidden sm:block">twitter</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`w-full h-24 lg:max-w-2xl flex flex-col items-center justify-between`}>
                <div className=" w-full h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                  <audio className="w-full h-full focus:outline-none" controls src={fileUrl}></audio>
                </div>
                <div className="w-full flex items-center justify-end">
                  <div onClick={handleClick} className="playlist w-auto flex items-center justify-between rounded px-4 py-2 border border-pink-500 cursor-pointer">
                    <div className="mr-4 font-medium text-xs text-purple-900">add to playlist</div>
                    <i className="text-pink-500 fas fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
      }
    </div>
  )
}


export default AudioItem;