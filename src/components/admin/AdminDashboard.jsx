import React from 'react';
import Category from './Category';
import FileListContainer from './fileList-container';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCategory
} from '../../redux/files/files.selector';

import {
  setCategory,
} from '../../redux/files/files.actions';

const AdminDashboard = ({  setCategory, category, history, match }) => {

  return (
    <div className={`w-full max-w-4xl shadow-2xl`}>
      <div className="w-full px-6 flex flex-wrap items-center justify-evenly sm:justify-between py-6 text-lg border-b border-black">
        <div onClick={() => history.push('/')} className="px-6 cursor-pointer border border-black">Nuf9ja</div>
        <div onClick={() => auth.signOut().then(()=>history.push('/'))} className="px-6 border border-black cursor-pointer">Logout</div>
      </div>
      <div className="w-full h-64 flex flex-col md:flex-row items-end justify-end md:justify-center border border-black px-4 md:px-12 mb-36">
        <button
          onClick={()=>history.push(`${match.path}/upload/video`)}
          className={`w-full md:w-1/2 text-center py-6 bg-white hover:bg-gray-700 hover:text-white focus:outline-none border border-black transform md:translate-y-1/2`}
        >
          Upload Your Video
              </button>
        <button
          onClick={()=>history.push(`${match.path}/upload/audio`)}
          className={`w-full md:w-1/2 text-center py-6 bg-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none border border-black transform md:translate-y-1/2`}
        >
          Upload Your Audio
              </button>
      </div>
      <div className="w-full px-4 md:px-12">
        <Category category={category} changeHandler={val => setCategory(val)} />
        <div className="w-full py-6 mt-12">
        <FileListContainer/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  category: selectCategory
})

const mapDispatchToProps = dispatch => ({
  setCategory: value => dispatch(setCategory(value)),
})
export default connect(mapStateToProps,mapDispatchToProps)(AdminDashboard);