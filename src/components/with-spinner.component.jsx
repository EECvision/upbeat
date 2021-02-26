import React from 'react';


const WithSpinner = WrappedComponent => {
  const Spinner = ({ loading, ...otherProps }) => {

    return (
      <div className="w-full flex items-center justify-center">
        {
          loading
            ?
            <div className="w-auto flex items-center justify-center px-8 py-2 font-medium mr-2 rounded bg-purple-700">
              <div className="animate-ping w-2 h-2 border-4 border-pink-500 mr-4 rounded-full">
              </div>
              <div className="text-white text-sm">please wait...</div>
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