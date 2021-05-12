import userActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    isSigninigIn: false,
    error: null,
    success: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        case userActionTypes.GOOGLE_SIGN_IN_START:
            return {
                ...state,
                isSigninigIn: true,
                error: null,
                success: null
            }
        case userActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isSigninigIn: false,
                error: null,
                success: 'successful'
            }
        case userActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload,
                success: null,
                isSigninigIn: false
            }
        default:
            return state
    }
}

export default userReducer;