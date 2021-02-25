import React from 'react';


const WithSpinner = WrappedComponent => {
  const Spinner = ({ loading, ...otherProps }) => {

    return (
      <div className="w-full flex items-center justify-center">
        {
          loading
            ?
            <div className="w-auto flex items-center justify-center px-12 py-3 font-medium mr-2 rounded bg-purple-700">
              <div className="animate-spi w-10 h-10 border-4 border-gray-100 mr-4 rounded-full">
                <div className="animate-spin w-full h-full flex justify-center border-4 border-pink-500 mr-4 rounded">
                </div>
              </div>
              <div className="text-white">please wait...</div>
            </div>
            :
            <WrappedComponent {...otherProps} />
        }
      </div>
    )
  }
  return Spinner
}

export default WithSpinner;