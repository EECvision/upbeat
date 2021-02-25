import { createSelector } from 'reselect';

const selectMusic = state => state.music;

export const selectMusicList = createSelector(
    [selectMusic],
    music => music.musicList
);

export const selectAudioList = createSelector(
    [selectMusic],
    music => music.audioList
)

export const selectSearchEntry = createSelector(
    [selectMusic],
    music => music.searchEntry
)

export const selectIsFetching = createSelector(
    [selectMusic],
    music => music.isFetching
)