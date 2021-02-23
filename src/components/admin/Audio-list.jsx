import React from 'react';
import { connect } from 'react-redux';
import {
  deleteFileStart
} from '../../redux/files/files.actions';

const AudioList = ({fileItem, deleteFile}) => {
  const { fileUrl, fileMetadata, imageUrl } = fileItem;
  return (
    <div className="w-full flex justify-between items-end p-1 border border-black mb-6">
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
export default connect(null,mapDispatchToProps)(AudioList)