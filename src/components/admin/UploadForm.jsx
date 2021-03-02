import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AudioPreview from './Audio-preview';
import VideoPreview from './Video-preview';
import Category from './Category';
import UpLoadTab from './UploadAction';
import {
  setCategory,
  uploadFileSuccess
} from '../../redux/files/files.actions';
import {
  selectCategory,
  selectIsUploading,
  selectError,
  selectSuccess
} from '../../redux/files/files.selector';


const UploadForm = ({ isUploading, setCategory, category, match, history, error, success, setSuccess }) => {
  const [fileStatus, setFileStatus] = useState('no file selected')
  const [musicUrl, setMusicUrl] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [artistName, setArtistName] = useState('');

  useEffect(() => {
    setCategory(match.params.id)
  }, [match.params.id,setCategory])

  const musicInputEl = useRef(null);
  const imageInputEl = useRef(null);

  function handlemusicUrl() {
    musicInputEl.current.click();
    setSuccess(null);
  }

  function handleimageUrl() {
    imageInputEl.current.click();
    setSuccess(null);
  }

  function handleImageChange(e) {
    const files = e.target.files;
    if (!files.length) {
      setFileStatus('no file selected')
    } else {
      setFileStatus("view selected files");
      setImageUrl({url: files[0]})
    }
  }

  function handleMusicChange(e) {
    const files = e.target.files;
    if (!files.length) {
      setFileStatus('no file selected')
    } else {
      setFileStatus("view selected files");
      setMusicUrl({
        url: files[0],
        metadata: files[0]
      })
    }
  }

  return (
    <div className="w-full flex items-center justify-center px- py-4 text-sm">
      <div className="w-full max-w-2xl bg-white px-12 py-16 rounded-2xl shadow-2xl">
        <div className="w-full text-center mb-12 font-bold text-lg">{match.params.id.toUpperCase()}</div>
        <div className="w-full flex flex-col items-center justify-center mb-12">
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <div className="w-full text-left">
              <div className="font-medium">FILE CATEGORY</div>
              <div>Description: This will determined where the file will be displayed</div>
            </div>
            <Category 
              category={category} 
              changeHandler={val =>{ 
                setCategory(val); 
                }
              }
            />
          </div>

          <div className="w-full flex flex-col items-center justify-center mb-12">
            <div className="w-full text-left">
              <div className="font-medium">ARTIST NAME</div>
              <div>Description: This is the name of the song owner</div>
            </div>
            <input 
              className="w-full h-8 p-1 border border-black focus:outline-none"
              type="text"
              value={artistName}
              onChange={(e)=>setArtistName(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col items-center justify-center mb-12">
            <div className="w-full text-left">
              <div className="font-medium">FILE COVER IMAGE</div>
              <div>Description: This will be the preview poster/image</div>
            </div>
            <input
              className="hidden"
              type="file"
              onChange={handleImageChange}
              ref={imageInputEl}
              accept="image/*"
            />
            <button
              className="w-full h-8 p-1 border border-black focus:outline-none"
              onClick={handleimageUrl}
            >
              {imageUrl ? 'file uploaded' : 'select poster'}
            </button>
          </div>
          <div className="w-full flex flex-col items-center justify-center mb-6">
            <div className="w-full text-left">
              <div className="font-medium">FILE TRACK</div>
              <div>Description: This is the source file you wish to Upload</div>
            </div>
            <input
              className="hidden"
              type="file"
              onChange={handleMusicChange}
              ref={musicInputEl}
              accept={`${match.params.id}/*`}
            />
            <button
              className="w-full h-8 p-1 border border-black focus:outline-none"
              onClick={handlemusicUrl}
            >
              {musicUrl ? 'file uploaded' : 'select file'}
            </button>
          </div>
        </div>
        {
          success ? 
            <div className="w-full mb-6 text-blue-600 font-medium shadow-lg p-6">{success}</div>
          : null
        }
        {
          error ?
            <div className="w-full mb-6 text-red-600 font-medium shadow-lg p-6">!! {error}</div>
          : null
        }
        <div className="w-full">
          <div className="font-medium">PREVIEW</div>
          <div>Description: {fileStatus}</div>
          <div><meter className="w-full" id="disk_c" value={isUploading} min="0" max="100"/></div>
          {
            match.params.id === 'audio' || match.params.id === 'gospel' || match.params.id === 'highlife'
              ?
              <AudioPreview {...musicUrl} img={imageUrl}/>
              :
              <VideoPreview {...musicUrl} img={imageUrl}/>
          }
          <div className="w-full flex items-center justify-between">
            <button onClick={() =>{setSuccess(null); history.push('/admin')}} className="border border-black px-8 py-3 focus:outline-none mr-4 hover:bg-gray-700 hover:text-white">Done</button>
            <UpLoadTab musicUrl={musicUrl} imageUrl={imageUrl} artistName={artistName}>Upload</UpLoadTab>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  category: selectCategory,
  isUploading: selectIsUploading,
  success: selectSuccess,
  error: selectError
})

const mapDispatchToProps = dispatch => ({
  setCategory: value => dispatch(setCategory(value)),
  setSuccess: val => dispatch(uploadFileSuccess(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);