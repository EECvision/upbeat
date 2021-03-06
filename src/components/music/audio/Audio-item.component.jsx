import React from 'react';
import './audio-item.css';
import { connect } from 'react-redux';
import { togglePlaylist, addToPlaylist } from '../../../redux/music/music.actions';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'


const AudioItem = ({ fileUrl, fileMetadata, imageUrl, addToPlaylist, togglePlaylist }) => {
  const handleClick = () => {
    addToPlaylist({
      name: fileMetadata.name,
      musicSrc: fileUrl,
      singer: fileMetadata.customMetadata.artistName
    })
    togglePlaylist(true)
  }
  return (
    <div className="w-full mb-8 text-sm md:text-base">
      <React.Fragment>
        <div className="w-full flex flex-col lg:flex-row items-center sm:items-start lg:items-center justify-between py-2 px-4 md:border-2 border md:border-gray-300 shadow md:shadow-none">
          <div className="w-full lg:max-w-xl flex items-center justify-center">
            <div className="w-3/12 flex items-center jusitfy-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24  rounded-full overflow-hidden">
                <img className="w-full h-full" src={imageUrl} alt="poster" />
              </div>
            </div>
            <div className="ml-4 h-24 w-9/12 lg:max-w-md flex flex-col items-center justify-evenly">
              <div className="w-full flex items-center justify-between">
                <div className="cursor-default text-gray-700 text-base w-40 truncate sm:w-64"> {fileMetadata.name} </div>
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
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  togglePlaylist: state => dispatch(togglePlaylist(state)),
  addToPlaylist: file => dispatch(addToPlaylist(file))
})

export default connect(null, mapDispatchToProps)(AudioItem);