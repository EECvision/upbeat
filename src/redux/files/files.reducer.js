import filesActionTypes from './files.types';
import {
    deleteFileFromFileList,
} from './files.utils';

const INITIAL_STATE = {
    fileList: [],
    category: 'audio',
    isFetching: false,
    isDeleting: false,
    isUploading: 0,
    error: null,  
    success: null 
}

const fileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case filesActionTypes.SET_CATEGORY:
            return {
                ...state,
                category: action.payload,
                success: null,
                error: null
            }

        case filesActionTypes.UPLOAD_FILE:
            return {
                ...state,
                fileList: [...state.fileList, action.payload],
                success: 'file upload successful',
                isUploading: 0,
                error: null
            }

        case filesActionTypes.DELETE_FILE_START:
            return {
                ...state,
                isDeleting: true,
                error: null
            }
        case filesActionTypes.DELETE_FILE_SUCCESS:
            return{
                ...state,
                fileList: deleteFileFromFileList(state.fileList, action.payload),
                isDeleting: false,
                error: null
            }
        case filesActionTypes.FETCH_FILES_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        case filesActionTypes.FETCH_FILES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fileList: action.payload,
                error: null
            }

        case filesActionTypes.FILE_UPLOADING:
            return {
                ...state,
                isUploading: action.payload,
                error: null
            }
        case filesActionTypes.UPLOAD_FILE_SUCCESS:
            return {
                ...state,
                success: action.payload,
                error: null
            }
        case filesActionTypes.UPLOAD_FILE_ERROR:
        case filesActionTypes.FETCH_FILES_FAILURE:
        case filesActionTypes.DELETE_FILE_FAILURE:
            return {
                ...state,
                isFetching: false,
                isDeleting: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default fileReducer;