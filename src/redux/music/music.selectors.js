import { createSelector } from 'reselect';

const selectMusic = state => state.music;

export const selectMusicList = createSelector(
    [selectMusic],
    music => music.musicList
);

export const selectSearchEntry = createSelector(
    [selectMusic],
    music => music.searchEntry
)

export const selectIsFetching = createSelector(
    [selectMusic],
    music => music.isFetching
)

export const selectPlaylist = createSelector(
    [selectMusic],
    music => music.playlist
)

export const selectTogglePlaylist = createSelector(
    [selectMusic],
    music => music.togglePlaylist
)

export const selectIsAddingToPlaylist = createSelector(
    [selectMusic],
    music => music.isAddingToPlaylist
)