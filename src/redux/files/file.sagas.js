import { takeLatest, call, put, all } from 'redux-saga/effects';
import filesActionTypes from './files.types';
import { convertFilesToMap } from './files.utils';
import { storageRef } from '../../firebase/firebase.utils';
import {
  fetchFilesSuccess,
  fetchFilesFailure,
  deleteFileSuccess,
  deleteFileFailure
} from './files.actions';

export function* fetchFiles() {
  try {
    const baseFolderRef = storageRef.child('nuf9ja');
    const baseFolderSnapshot = yield baseFolderRef.listAll();
    const folderRef = baseFolderSnapshot.prefixes;
    const folderSnapshots = []
    for (let i = 0; i < folderRef.length; i++) {
      const folderSnapshot = yield folderRef[i].listAll();
      folderSnapshots.push(folderSnapshot)
    }
    
    const filesRef = [];
    for (let i = 0; i < folderSnapshots.length; i++) {
      const fileRef = folderSnapshots[i].items
      filesRef.push(fileRef)
    }

    const filesSnapshot = [];
    for (let i = 0; i < filesRef.length; i++) {
      const urls = []
      for (let j = 0; j < filesRef[i].length; j++) {
        const file = {}
        const url = yield filesRef[i][j].getDownloadURL()
        file.url = url
        const metadata = yield filesRef[i][j].getMetadata()
        file.metadata = metadata
        urls.push(file)
      }
      filesSnapshot.push(urls)
    }

    const fileList = convertFilesToMap(filesSnapshot);
    yield put(fetchFilesSuccess(fileList));

  } catch (error) {
    yield put(fetchFilesFailure(error.message))
  }
}

export function* deleteFile({ payload }) {
  const { fileMetadata, imageMetadata } = payload;
  let fileRef = '';
  try {
    fileRef = storageRef.child(`nuf9ja/${fileMetadata.name.replace(/.mp3|.mp4/i, '')}/${imageMetadata.name}`);
    yield fileRef.delete()
    fileRef = storageRef.child(`nuf9ja/${fileMetadata.name.replace(/.mp3|.mp4/i, '')}/${fileMetadata.name}`);
    yield fileRef.delete()
    yield put(deleteFileSuccess(payload))
  } catch (error) {
    yield put(deleteFileFailure(error.message))
  }
}

export function* fetchFilesStart() {
  yield takeLatest(filesActionTypes.FETCH_FILES_START, fetchFiles)
}

export function* deleteFileStart() {
  yield takeLatest(filesActionTypes.DELETE_FILE_START, deleteFile)
}

export function* fileSaga() {
  yield all([
    call(fetchFilesStart),
    call(deleteFileStart)
  ])
}