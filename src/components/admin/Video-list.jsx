import React from 'react';
import { connect } from 'react-redux';
import {
  deleteFileStart
} from '../../redux/files/files.actions';

const VideoList = ({ fileItem, deleteFile }) => {
  const { fileUrl, fileMetadata, imageUrl } = fileItem;
  return (
    <div className="w-full flex justify-between items-end mb-6">
      <div className="w-full h-56 p-1 border border-black">
        {
          !fileUrl ? null
            :
            <div className="w-full flex flex-col justify-between">
              <video poster={imageUrl} className="w-full h-48 " controls src={fileUrl} title={fileMetadata.name}></video>
              <div className="w-full flex items-center justify-between">
                <div>{fileMetadata.name}</div>
                <div>{`${(fileMetadata.size / 1049367).toFixed(2)} mb`}</div>
              </div>
            </div>
        }
      </div>
      <button className="w-12 ml-1 h-full bg-black text-green-500 rounded" onClick={() => deleteFile(fileItem)}>Del</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteFile: file => dispatch(deleteFileStart(file))
})
export default connect(null,mapDispatchToProps)(VideoList)