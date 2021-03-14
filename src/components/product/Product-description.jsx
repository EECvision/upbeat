import React, { useState } from 'react';
import { DATA } from './aboutApp.data';
import ProductItem from './Product-item';

const ProductDescription = () => {
  const [data,] = useState(DATA)

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100 pb-12 px-4 md:px-0">
      <div className="w-full max-w-xl flex flex-col items-center justify-center mb-10 py-10">
        <div className="font-bold text-gray-700 text-center flex flex-col items-center justfy-center mb-12">
          <div className="w-full text-center text-4xl mb-4 font-serif">For Artists and for Listeners</div>
          <div className="bg-pink-600 rounded py-1 px-12"/>
        </div>
        <div className="text-center mb-5 font-serif">nuf9ja is an open site for every that loves music. We support young Nigerian artists
           who are pationate about inspiring the mind through their songs
            and We make their efforts availble to all listeners without cost
          </div>
        <div className="text-center text-xs">  --Whatever music does to the soul is what needs to be done to the soul--</div>
        
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly max-w-6xl">
        {
          data.map(({ id, ...otherProps }) => (
            <ProductItem key={id} {...otherProps} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductDescription;