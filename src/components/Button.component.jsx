import React from 'react';

const Button =({children, inverted, clickHandler})=>(
    <button onClick={clickHandler} className={`${inverted ? 'bg-white border-2 border-pink-600 text-pink-600 hover:bg-pink-700 hover:text-white hover:bg-none' : 'bg-pink-600 hover:bg-pink-700 text-white'} text-xl font-medium focus:outline-none rounded px-16 py-4 `}>{children}</button>
)

export default Button