import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { storageRef, firebas } from '../../firebase/firebase.utils';
import {
  fileUploading,
  uploadFile,
} from '../../redux/files/files.actions';
import {
  selectFileList,
  selectCategory
} from '../../redux/files/files.selector';

const UploadTab = ({ uploadFile, fileUploading, fileList, musicUrl, imageUrl, category, artistName, children }) => {

  const handleFileUpload = (files, music, image) => {

    if (Object.keys(music).length === 0) return console.log('cannot upload an empty music file');
    if (Object.keys(image).length === 0) return console.log('cannot upload an empty image');

    const isExisting = files.find(f =>
      f.fileMetadata.name === music.url.name
    )
    if (isExisting) return console.log('file already exist');

    getUrl(music.url.name, music, image)

    async function getUrl(a, b, c) {
      const burl = await realUpload(a, b)
      const curl = await realUpload(a, c)
      uploadFile({
        fileUrl: burl.url,
        fileMetadata: burl.metadata,
        imageUrl: curl.url,
        imageMetadata: curl.metadata
      });
    }
  }


  function realUpload(path, file) {
    if(!artistName)artistName = path.replace(/.mp3|.mp4/i,'')
    const metadata = {
      customMetadata: {
        category: category,
        artistName: artistName
      }
    };
    return new Promise((resolve, reject) => {
      const uploadTask = storageRef.child(`nuf9ja/${path.replace(/.mp3|.mp4/i, '')}/${file.url.name}`).put(file.url,metadata);
      uploadTask.on(firebas.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          fileUploading(progress);
          switch (snapshot.state) {
            case firebas.storage.TaskState.PAUSED:
              break;
            case firebas.storage.TaskState.RUNNING:
              break;
            default:
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              break;
            case 'storage/canceled':
              break;
            case 'storage/unknown':
              break;
            default:
              break;
          }
        },
        () => {
          const file = {};
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            file.url = downloadURL
            uploadTask.snapshot.ref.getMetadata().then((metadata) => {
              file.metadata = metadata
              resolve(file)
            });
          });
        })
    }
    )
  }

  return (
    <button onClick={() => handleFileUpload(fileList, musicUrl, imageUrl)} className="w-full border border-black px-8 py-3 focus:outline-none bg-gray-200 hover:bg-gray-700 hover:text-white">{children}</button>
  )
}

const mapStateToProps = createStructuredSelector({
  fileList: selectFileList,
  category: selectCategory
})

const mapDispatchToProps = dispatch => ({
  fileUploading: val => dispatch(fileUploading(val)),
  uploadFile: file => dispatch(uploadFile(file)),
})
export default connect(mapStateToProps, mapDispatchToProps)(UploadTab);

