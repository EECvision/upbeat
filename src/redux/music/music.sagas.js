import { takeLatest, put, call, all } from 'redux-saga/effects';
import musicActionTypes from './music.types';
import { storageRef } from '../../firebase/firebase.utils';
import { convertFilesToMap } from './music.utils';

import {
    fetchMusicSuccess,
    fetchMusicFailure
} from './music.actions';

export function* fetchMusicStart() {
    yield takeLatest(musicActionTypes.FETCH_MUSIC_START, fetchMusic)
}

export function* fetchMusic() {
    try {
        const baseFolderRef = storageRef.child('upbeat');
        const baseFolderSnapshot = yield baseFolderRef.listAll();
        const folderRef = baseFolderSnapshot.prefixes;
        const foldersSnapshot = [];
        for (let i = 0; i < folderRef.length; i++) {
            const folderSnapshot = yield folderRef[i].listAll();
            foldersSnapshot.push(folderSnapshot)
        }
        const files = [];
        for (let i = 0; i < foldersSnapshot.length; i++) {
            const file = []
            const filesRef = foldersSnapshot[i].items
            for (let k = 0; k < filesRef.length; k++) {
                const urls = {}
                const url = yield filesRef[k].getDownloadURL();
                urls.url = url;
                const metadata = yield filesRef[k].getMetadata();
                urls.metadata = metadata
                file.push(urls)
            }
            files.push(file)
        }
        const musicList = convertFilesToMap(files)
        yield put(fetchMusicSuccess(musicList))
    } catch (error) {
        yield put(fetchMusicFailure(error.message))
    }
}

export function* musicSaga() {
    yield all([
        call(fetchMusicStart)
    ])
}