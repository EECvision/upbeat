import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full mb-20"></div>
      <div className="w-full fixed top-0 z-10 flex items-center justify-center shadow-xl fixed top-0 z-10 bg-white">
        <div style={{ fontFamily: 'sans-serif' }} className="w-full md:max-w-6xl px-4 md:px-0 flex items-center justify-between">
        <Link to="/" className="text-gray-600 text-xl py-6 cursor-pointer">Upbeat</Link>
        <div className="hidden md:flex justify-center items-center pr-12 md:pr-0">
        <Link to="/admin" className="text-pink-600 text-lg font-medium py-1 px-6 cursor-pointer border-2 border-pink-600 rounded transition duration-200 ease-in-out transform hover:scale-95">Publish</Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default withRouter(NavMenu)