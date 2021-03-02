import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectIsSigningIn = createSelector(
    [selectUser],
    user => user.isSigninigIn
)

export const selectSuccess = createSelector(
    [selectUser],
    user => user.success
)

export const selectError = createSelector(
    [selectUser],
    user => user.error
)