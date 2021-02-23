import React, { useState } from 'react';
import { DATA } from './aboutApp.data';
import ProductItem from './Product-item';

const ProductDescription = () => {
  const [data,] = useState(DATA)

  return (
    <div 
      className="w-full flex flex-col items-center justify-center py-24 bg-gray-100">
      <div className="w-full text-center text-4xl text-gray-600 mb-16">Why Our sound is different</div>
      <div className="w-full sm:max-w-xl md:max-w-5xl px-4">
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