import React from 'react';
import VideoList from './Video-list';
import AudioList from './Audio-list';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectFileList,
  selectCategory,
  selectError
} from '../../redux/files/files.selector';

const FileListMenu = ({ fileList, category, error }) => {
  return (
    <div className="w-full">
      {
        !!error 
        ? <div> unable to delete please try again</div>
        : null
      }
      {
        fileList
          .filter(file => file.fileMetadata.customMetadata.category === category)
          .map((fileItem, idx) => (
            category === 'video'
              ?
              <div key={idx} className="w-full">
                <VideoList fileItem={fileItem} />
              </div>
              :
              <div key={idx} className="w-full">
                <AudioList fileItem={fileItem} />
              </div>
          ))
      }
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  fileList: selectFileList,
  category: selectCategory,
  error: selectError
})

export default connect(mapStateToProps)(FileListMenu);