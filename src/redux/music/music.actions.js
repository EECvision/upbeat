import musicActionTypes from './music.types';

export const fetchMusicStart = () => ({
    type: musicActionTypes.FETCH_MUSIC_START,
})

export const fetchMusicSuccess = file => ({
    type: musicActionTypes.FETCH_MUSIC_SUCCESS,
    payload: file
})

export const fetchMusicFailure = error => ({
    type: musicActionTypes.FETCH_MUSIC_FAILURE,
    payload: error
})

export const setSearchEntry = value => ({
    type: musicActionTypes.SET_SEARCH_ENTRY,
    payload: value
})

export const addToPlaylist = file => ({
    type: musicActionTypes.ADD_TO_PLAYLIST,
    payload: file
})

export const togglePlaylist = () => ({
    type: musicActionTypes.TOGGLE_PLAYLIST
})

export const updatePlaylist = newlist => ({
    type: musicActionTypes.UPDATE_PLAYLIST,
    payload: newlist
})

export const setIsAddingToPlaylist =()=>({
    type: musicActionTypes.IS_ADDING_TO_PLAYLIST
})




