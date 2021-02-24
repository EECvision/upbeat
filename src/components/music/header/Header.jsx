import React from 'react';
import Form from './Form';
import Navigation from './Navigation';
import NavMenu from './NavMenu';

const Header = ({ submitHandler }) => {
  return (
    <div className="w-full mb-12">
      <NavMenu />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between md:justify-between  px-4 md:px-0 pb-8">
          <Navigation />
          <Form handleSubmit={submitHandler} />
        </div>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"/>
    </div>
  )
}

export default Header;
