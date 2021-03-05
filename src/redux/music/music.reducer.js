import musicActionTypes from './music.types';
import { addFileToPlayList } from './music.utils';
const INITIAL_STATE = {
  musicList: [],
  playlist: [],
  searchEntry: '',
  isFetching: false,
  togglePlaylist: false,
  error: null,
  isAddingToPlaylist: false
}


const musicReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case musicActionTypes.FETCH_MUSIC_START:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case musicActionTypes.FETCH_MUSIC_SUCCESS:
      return {
        ...state,
        musicList: action.payload,
        isFetching: false,
        error: null
      }
    case musicActionTypes.FETCH_MUSIC_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case musicActionTypes.SET_SEARCH_ENTRY:
      return {
        ...state,
        searchEntry: action.payload
      }
    case musicActionTypes.ADD_TO_PLAYLIST:
      return {
        ...state,
        playlist: addFileToPlayList(state.playlist,action.payload),
        isAddingToPlaylist: true
      }
    case musicActionTypes.UPDATE_PLAYLIST:
      return {
        ...state,
        playlist: action.payload
      }
    case musicActionTypes.TOGGLE_PLAYLIST:
      return {
        ...state,
        togglePlaylist: action.payload
      }
    case musicActionTypes.IS_ADDING_TO_PLAYLIST:
      return{
        ...state,
        isAddingToPlaylist: false
      }
    default:
      return state;
  }
}

export default musicReducer;