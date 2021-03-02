import userActionTypes from './user.types';

export const setCurrentUser = userAuth => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: userAuth
})

export const signInStart = credentials => ({
    type: userActionTypes.SIGN_IN_START,
    payload: credentials
})

export const signInSuccess = user => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = error => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
})