import userActionTypes from './user.types';

export const setCurrentUser = userAuth => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: userAuth
})

export const googleSignInStart = credentials => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START,
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

export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error
})
