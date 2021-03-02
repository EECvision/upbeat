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

export const selectIsDeleting = createSelector(
    [selectFile],
    file => file.isDeleting
)

export const selectError = createSelector(
    [selectFile],
    file => file.error
)

export const selectSuccess = createSelector(
    [selectFile],
    file => file.success
)