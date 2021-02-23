import React from 'react';

const ProductItem = ({ img, text, reverse }) => {
    return (
        <div className={`w-full flex flex-col-reverse md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} justify-evenly mb-6 shadow-lg`}>
            <div
                style={{ height: '24rem', fontFamily: 'Lobster, cursive' }}
                className={`w-full md:max-w-lg flex items-center text-center font-medium px-6 text-4xl text-pink-600 justify-center`}
            >
                {text}
            </div>
            <div style={{ height: '24rem' }} className="w-full md:max-w-lg border-b-2 md:border-none border-gray-300 md:shadow-lg">
            </div>
        </div>
    )
}

export default ProductItem