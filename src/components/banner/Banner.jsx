import React from 'react';
import Button from '../Button.component';
import { NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-900 bg-cover bg-no-repeat opacity-90 py-20 md:py-32">
    {/* <div style={{ backgroundImage: `url(${imageMicrophone})`, height: '38rem' }} className="w-full flex items-center justify-center bg-gray-100 bg-cover bg-no-repeat opacity-90"> */}
        <div className="w-full sm:max-w-xl md:max-w-2xl flex flex-col items-center justify-center text-white text-center p-4 border-b-2 border-white bg-black opacity-90 rounded">
          <div className="text-3xl sm:text-4xl md:text-5xl mb-12"><span style={{fontFamily: 'sans-serif'}}>Nuf9ja</span> <br/> is dedicated to bringing the best sound to your door step</div>
          <NavLink to="/your-music"><Button>Play on!</Button></NavLink>
        </div>
    </div>
  )
}

export default Banner
