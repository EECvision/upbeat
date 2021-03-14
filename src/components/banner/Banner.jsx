import React from 'react';
import Button from '../Button.component';
import { NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
  return (
    // <div className="w-full flex items-center justify-center bg-gray-900 bg-cover bg-no-repeat opacity-90 py-20 md:py-32">
    <div style={{ backgroundImage: `url("https://img.icons8.com/color/512/000000/musical-notes.png" )` }} className=" height w-full border border-black flex items-center justify-center bg-repeat">
      <div className="w-full h-full bg-black flex items-center justify-center bg-black opacity-90">
        <div className="w-full sm:max-w-xl md:max-w-2xl text-white text-center p-4 rounded">
          <div className="text-3xl sm:text-4xl md:text-5xl mb-12"><span style={{ fontFamily: 'sans-serif' }}>Nuf9ja</span> <br /> is dedicated to bringing the best sound to your door step</div>
          <NavLink to="/your-music"><Button>Play on!</Button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Banner
