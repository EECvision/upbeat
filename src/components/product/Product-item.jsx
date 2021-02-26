import React from 'react';

const ProductItem = ({ img, text, reverse }) => {
    return (
        <div className={`w-full flex flex-col-reverse md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} justify-evenly mb-6 shadow-lg`}>
            <div
                style={{ height: '12rem', fontFamily: 'sans-serif' }}
                className={`w-full md:max-w-lg flex items-center text-center font-medium px-6 text-3xl text-pink-700 justify-center`}
            >
                {text}
            </div>
            <div style={{ height: '12rem' }} className="w-full md:max-w-lg border md:border-none border-gray-300 md:shadow-lg rounded-b-lg md:rounded-none">
            </div>
        </div>
    )
}

export default ProductItem