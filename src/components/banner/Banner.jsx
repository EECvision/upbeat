import React from 'react';
import Button from '../Button.component';
import { NavLink } from 'react-router-dom';
import imageMicrophone from '../../assets/image-microphone.jpg';
import './Banner.css'

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${imageMicrophone})`, height: '38rem' }} className="w-full flex items-center justify-center bg-gray-100 bg-cover bg-no-repeat opacity-90">
        <div className="w-full sm:max-w-xl md:max-w-2xl flex flex-col items-center justify-center text-white text-center p-4 border-b-2 border-white bg-black opacity-90 rounded">
          <div className="text-3xl sm:text-4xl md:text-5xl mb-12"><span style={{fontFamily: 'cursive'}}>Nuf9ja</span> <br/> is dedicated to bringing the best sound to your door step</div>
          <NavLink to="/your-music"><Button>Play on!</Button></NavLink>
        </div>
    </div>
  )
}

export default Banner
