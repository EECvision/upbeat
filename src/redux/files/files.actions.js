import filesActionTypes from './files.types';

export const setCategory = category => ({
    type: filesActionTypes.SET_CATEGORY,
    payload: category
})

export const uploadFile = file => ({
    type: filesActionTypes.UPLOAD_FILE,
    payload: file
});

export const deleteFileStart = file => ({
    type: filesActionTypes.DELETE_FILE_START,
    payload: file
});

export const deleteFileSuccess = file => ({
    type: filesActionTypes.DELETE_FILE_SUCCESS,
    payload: file
})

export const deleteFileFailure = error => ({
    type: filesActionTypes.DELETE_FILE_FAILURE,
    payload: error
})

export const fetchFilesStart = () => ({
    type: filesActionTypes.FETCH_FILES_START,
})

export const fetchFilesSuccess = file => ({
    type: filesActionTypes.FETCH_FILES_SUCCESS,
    payload: file
})

export const fetchFilesFailure = error => ({
    type: filesActionTypes.FETCH_FILES_FAILURE,
    payload: error
})

export const fileUploading = val => ({
    type: filesActionTypes.FILE_UPLOADING,
    payload: val
})

export const uploadFileError = val => ({
    type: filesActionTypes.UPLOAD_FILE_ERROR,
    payload: val
})

export const uploadFileSuccess = val => ({
    type: filesActionTypes.UPLOAD_FILE_SUCCESS,
    payload: val
})