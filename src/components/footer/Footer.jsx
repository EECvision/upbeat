import React from 'react';
import Button from '../Button.component';
import iconFacebook from '../../assets/icon-facebook.svg';
import iconYoutube from '../../assets/icon-youtube.svg';
import iconInstagram from '../../assets/icon-instagram.svg';
import iconTwitter from '../../assets/icon-twitter.svg';
import { withRouter } from 'react-router-dom';

const Footer = ({history}) => {
  return (
    <div className="w-full md:px-0 flex flex-col items-center justify-start">
      <div className="w-full flex justify-center bg-gray-100 px-4">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between py-12">
          <div className="text-center md:text-left text-pink-700 text-3xl sm:text-4xl leading-tight mb-12 md:mb-0">Keep your life<br />smooth with our music today!</div>
          <Button clickHandler={()=>history.push('/your-music')} inverted>Get Started</Button>
        </div>
      </div>
      <div className="w-full flex justify-center bg-gray-900 opacity-90 md:px-0 py-12 px-4">
        <div style={{ height: '16rem' }} className="w-full sm:max-w-md md:max-w-5xl flex flex-col md:flex-row items-start justify-between text-gray-400 text-sm md:text-xl">
          <div className="w-full flex flex-col items-start">
            <div className="py-2 cursor-pointer">HOME</div>
            <div className="py-2 cursor-pointer">CONTACT US</div>
          </div>
          <div className="w-full flex flex-col items-center mb-12">
            <div className="w-full text-center mb-8">FOLLOW US ON</div>
            <div className="w-64 md:w-full flex justify-evenly opacity-50">
              <img src={iconFacebook} alt="facebook-icon" className="w-6 h-6" />
              <img src={iconYoutube} alt="youtube-icon" className="w-6 h-6" />
              <img src={iconInstagram} alt="instagram-icon" className="w-6 h-6" />
              <img src={iconTwitter} alt="twitter-icon" className="w-6 h-6" />
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <div className="w-auto border-2 border-gray-500 py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-800">PUBLISH YOUR SONG</div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-4 px-4 md:px-0">
        <div className="w-full max-w-5xl flex flex-wrap justify-center md:justify-start items-center bg-gray-100 text-gray-500">
          <div style={{ fontFamily: 'sans-serif' }} className="text-gray-600 text-xl font-medium cursor-pointer mr-12">Nuf9ja</div>
          <div> All rights Reserved</div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Footer)