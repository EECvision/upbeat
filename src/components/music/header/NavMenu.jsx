import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const NavButton = ({ children, clickHandler }) => (
  <button onClick={clickHandler} className="text-gray-600 text-lg font-medium py-6 px-4 cursor-pointer hover:text-pink-500 focus:outline-none border-b-4 border-white hover:border-pink-600">{children}</button>
)
const NavMenu = ({ history }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white shadow-xl">
      <div className="w-full py-10"></div>
      <div style={{ fontFamily: 'sans-serif' }} className="w-full fixed top-0 z-10 md:max-w-6xl px-4 md:px-0 flex items-center justify-between bg-white">
        <Link to="/" className="text-gray-600 text-xl font-medium py-6 cursor-pointer">Nuf9ja</Link>
        <div className="hidden md:flex justify-center items-center pr-12 md:pr-0">
          <NavButton clickHandler={() => { history.push('#') }}>ABOUT</NavButton>
          <Link to="#" className="text-pink-500 text-base font-medium py-2 px-12 cursor-pointer border-2 border-pink-500 rounded-lg transition duration-200 delay-200 ease-out-out transform hover:scale-95">PUBLISH</Link>
        </div>
      </div>
    </div>
  )
}

export default withRouter(NavMenu)