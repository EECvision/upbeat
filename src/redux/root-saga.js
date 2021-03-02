import { call, all } from 'redux-saga/effects';
import { fileSaga } from './files/file.sagas';
import { musicSaga } from './music/music.sagas';
import { userSaga } from './user/user.sagas';

export default function* rootSaga() {
    yield all([
        call(fileSaga),
        call(musicSaga),
        call(userSaga)
    ])
}