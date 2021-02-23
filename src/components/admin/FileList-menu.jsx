import React from 'react';
import VideoList from './Video-list';
import AudioList from './Audio-list';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectFileList,
  selectCategory
} from '../../redux/files/files.selector';

const FileListMenu = ({ fileList, category }) => {
  return (
    <div className="">
      {
        fileList
          .filter(file => file.fileMetadata.customMetadata.category === category)
          .map((fileItem, idx) => (
            category === 'video'
              ?
              <div key={idx} className="">
                <VideoList fileItem={fileItem} />
              </div>
              :
              <div key={idx} className="">
                <AudioList fileItem={fileItem} />
              </div>
          ))
      }
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  fileList: selectFileList,
  category: selectCategory
})

export default connect(mapStateToProps)(FileListMenu);