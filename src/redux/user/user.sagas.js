import { takeLatest, all, put, call } from 'redux-saga/effects';
import userActionTypes from './user.types';
import { auth } from '../../firebase/firebase.utils';
import {
    signInSuccess,
    signInFailure 
} from './user.actions';


export function* signInStart(){
    yield takeLatest(userActionTypes.SIGN_IN_START, signIn)
}

export function* signIn({payload}){
    const { email, password } = payload;
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield put(signInSuccess(user));    
    } catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* userSaga(){
    yield all([
        call(signInStart)
    ])
}
