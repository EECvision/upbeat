import React from 'react';

const images = {
    a: "https://img.icons8.com/E50C6C/96/microphone.png",
    b: "https://img.icons8.com/color/96/000000/international-music.png",
    c: "https://img.icons8.com/small/96/E50C6C/music-library.png"
}

const ProductItem = ({ img, title, content, color, negative }) => {
    return (
        <div className={`w-72 h-80  flex flex-col items-center justify-evenly border border-gray-300 shadow p-6 rounded-lg ${negative ? "mb-4 md:mb-32" : "mb-4 md:mb-0"}`}>
            <div className="w-24 h-24 mb-5">
                <img className="w-full" src={images[img]} alt="icon"/>
            </div>
            <div className="text-black text-center text-xl mb-5">{title}</div>
            <div className="text-black text-center text-sm mb-5">{content}</div>
            <div className={`bg-${color}-600 px-16 py-1 rounded`}/>
        </div>
    )
}

export default ProductItem         


