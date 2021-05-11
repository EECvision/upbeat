import React from 'react';
import Button from '../Button.component';
import { withRouter } from 'react-router-dom';

const Footer = ({history}) => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <div className="w-full flex justify-center bg-gray-300 px-4 md:px-4">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between py-12 md:py-20">
          <div className="text-center md:text-left text-pink-700 text-3xl sm:text-4xl leading-tight mb-12 md:mb-0">Keep your life<br />smooth with Upbeat</div>
          <Button clickHandler={()=>history.push('/my-music')} inverted>Play On!</Button>
        </div>
      </div>
      <div className="w-full flex justify-center py-4 px-4 md:px-0 bg-gray-800">
        <div className="w-full max-w-5xl flex flex-wrap justify-between md:justify-start items-center text-gray-500">
          <div style={{ fontFamily: 'sans-serif' }} className="text-gray-400 text-xl font-medium cursor-pointer mr-12">Upbeat</div>
          <div className="text-gray-400">Designed with &#x2728; by Emmanuel Ezeka</div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Footer)