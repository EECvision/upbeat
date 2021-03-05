import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full mb-20"></div>
      <div className="w-full fixed top-0 z-10 flex items-center justify-center shadow-xl fixed top-0 z-10 bg-white">
        <div style={{ fontFamily: 'sans-serif' }} className="w-full md:max-w-6xl px-4 md:px-0 flex items-center justify-between">
        <Link to="/" className="text-gray-600 text-xl font-medium py-6 cursor-pointer">Nuf9ja</Link>
        <div className="hidden md:flex justify-center items-center pr-12 md:pr-0">
          <Link to="#" className="text-pink-500 text-base font-medium py-2 px-12 cursor-pointer border-2 border-pink-500 rounded-lg transition duration-200 delay-200 ease-out-out transform hover:scale-95">PUBLISH</Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default withRouter(NavMenu)