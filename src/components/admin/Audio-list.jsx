import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsDeleting } from '../../redux/files/files.selector';
import {
  deleteFileStart
} from '../../redux/files/files.actions';


const AudioList = ({ fileItem, deleteFile, loading }) => {
  const [delet, toggleDelete] = useState(false);

  const { fileUrl, fileMetadata, imageUrl } = fileItem;
  return (
    <div className="w-full flex justify-between items-end p-1 border border-black mb-6">
      {
        delet
          ?
          <div style={{ background: 'rgb(0,0,0,0.2)' }} className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-screen px-4 md:px-0">
            <div className="w-full flex flex-col justify-between items-center max-w-lg bg-white rounded-lg overflow-hidden">
              <div className="w-full text-left text-red-500 font-medium text-xl mb-6 bg-red-100 p-6">! Warning</div>
              <div className="w-full text-left text-gray-700 font-medium text-lg mb-6 px-6">
                Are you sure you want to permanently delete this file?
          </div>
              <div className="w-full flex justify-end items-center px-6 pb-6">
                <button onClick={() => toggleDelete()} className="px-4 border border-black mr-4 bg-gray-300 hover:text-white hover:bg-gray-600">Cancel</button>
                <button onClick={() => {
                  deleteFile(fileItem); setTimeout(() => {
                    toggleDelete()
                  }, 1000);
                }} className="px-4 border border-black hover:text-white hover:bg-red-500">Delete</button>
              </div>
            </div>
          </div>
          : null
      }
      <div className="w-full h-24 flex items-start justify-start">
        {
          !imageUrl ? null
            :
            <img className="w-12 md:w-24 h-12 md:h-full mr-2" src={imageUrl} alt="avatar" ></img>
        }
        {
          !fileUrl ? null
            :
            <div className="w-full flex h-full flex-col justify-between ">
              <audio className="w-full h-12" controls src={fileUrl} title={fileMetadata.name}></audio>
              <div className="w-full flex items-end justify-between">
                <div className="w-32 sm:w-auto truncate">{fileMetadata.name}</div>
                <div>{`${(fileMetadata.size / 1049367).toFixed(2)} mb`}</div>
              </div>
            </div>
        }
      </div>
      <button className="w-12 ml-1 h-full bg-black text-green-500 rounded" onClick={() => toggleDelete(true)}>Del</button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  loading: selectIsDeleting
})

const mapDispatchToProps = dispatch => ({
  deleteFile: file => dispatch(deleteFileStart(file))
})
export default connect(mapStateToProps, mapDispatchToProps)(AudioList)