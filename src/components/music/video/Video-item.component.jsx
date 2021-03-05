import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'


const VideoItem = ({ fileUrl, fileMetadata, imageUrl }) => {
  return (
    <div className="w-full max-w-sm flex flex-col items-center justify-center p-4 mb-8 text-sm md:text-base shadow-2xl border-2 border-purple-100">
      <video className="w-full h-80 focus:outline-none mb-4 m-0 p-0" controls poster={imageUrl} src={fileUrl}></video>
      <div className="w-full flex items-center justify-between">
        <div className="w-full cursor-default text-gray-700 text-base truncate mb-4"> {fileMetadata.name} </div>
        <div className="w-24 ml-2 flex items-center justify-center ">
          {`${(fileMetadata.size / 1049367).toFixed(2)} mb`}
        </div>
      </div>
      <div className="w-full flex items-center justify-start text-xs md:text-base">
        <div className="font-medium text-gray-700 mr-4 text-base">share on: </div>
        <div className="w-auto h-auto flex justify-start items-center pr-2 mr-2 text-xs text-pink-700 font-medium font-serif rounded-l-full border-b-2 sm:border-purple-800">
          <FacebookShareButton
            url={fileUrl}
            quote={fileMetadata.name}
          >
            <FacebookIcon size={24} round={true} />
          </FacebookShareButton>
          <div className="hidden sm:block">facebook</div>
        </div>
        <div className="w-auto h-auto flex justify-start items-center pr-2 mr-2 text-xs text-pink-700 font-medium font-serif rounded-l-full border-b-2 sm:border-purple-800">
          <WhatsappShareButton
            title={fileMetadata.name}
            url={fileUrl}
          >
            <WhatsappIcon size={24} round={true} />
          </WhatsappShareButton>
          <div className="hidden sm:block">whatsapp</div>
        </div>
        <div className="w-auto h-auto flex justify-start items-center pr-2 mr-2 text-xs text-pink-700 font-medium font-serif rounded-l-full border-b-2 sm:border-purple-800">
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
  )
}


export default VideoItem;