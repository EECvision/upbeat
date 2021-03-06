import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import iconHamburger from '../../assets/icon-hamburger.svg';
import iconClose from '../../assets/icon-close.svg';

const NavButton = ({ children, clickHandler }) => (
  <button onClick={clickHandler} className="text-gray-600 text-lg font-medium py-6 px-4 cursor-pointer focus:outline-none border-b-4 border-white hover:border-pink-600">{children}</button>
)

const NavButtonDropdown = ({ children, clickHandler }) => (
  <button onClick={clickHandler} className="w-48 text-gray-600 text-lg font-medium py-6 px-4 cursor-pointer hover:text-pink-600 focus:outline-none border-b-4 border-gray-200 hover:border-pink-600">{children}</button>
)

const Header = ({ history }) => {
  const [dropdown, toggleDropdown] = useState(false)
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(()=>{
    const removeResize = window.addEventListener('resize', handleResize);
    return ()=> removeResize
  },[])

  const handleResize=()=>{
    setWindowWidth(window.innerWidth)
  }

  return (
    <div className="w-full">
      <div className="w-full bg-white py-8"></div>
      <div className="w-full relative flex flex-col items-center">
        <div className="w-full flex justify-center bg-white z-10 px-4 md:px-0 shadow fixed top-0">
          <div style={{ fontFamily: 'sans-serif' }} className="w-full max-w-5xl flex justify-between items-center">
            <Link to="/" className="text-gray-600 text-xl font-medium py-6 cursor-pointer">Upbeat</Link>
            <div className="hidden md:flex justify-center items-center">
              <NavButton clickHandler={() => { history.push('/my-music') }}>Play On!</NavButton>
              <Link to="/admin" className="text-pink-600 text-lg font-medium py-1 px-6 cursor-pointer border-2 border-pink-600 rounded transition duration-200 ease-in-out transform hover:scale-95">Publish</Link>
            </div>
            <div className="flex md:hidden cursor-pointer font-light">
              {
                dropdown ?
                  <img onClick={() => toggleDropdown(false)} src={iconClose} alt="icon" />
                  :
                  <img onClick={() => toggleDropdown(true)} src={iconHamburger} alt="icon" />
              }
            </div>
          </div>
        </div>
        <div className={`${dropdown && windowWidth < 768 ? 'h-64 ' : 'h-0'} w-full overflow-hidden fixed z-10 transition-all duration-500 delay-300 ease-in-out flex flex-col items-center bg-gray-100`}>
          <NavButtonDropdown clickHandler={() => { history.push('/my-music') }}>Play On!</NavButtonDropdown>
          <NavButtonDropdown clickHandler={() => { history.push('/admin') }} >Publish</NavButtonDropdown>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)