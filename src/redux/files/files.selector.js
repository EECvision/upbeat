import { createSelector } from 'reselect';

const selectFile = state => state.file;

export const selectFileList = createSelector(
    [selectFile],
    file => file.fileList
);

export const selectCategory = createSelector(
    [selectFile],
    file => file.category
);

export const selectIsFileFetching = createSelector(
    [selectFile],
    file => file.isFetching
)

export const selectIsUploading = createSelector(
    [selectFile],
    file => file.isUploading
)