import musicActionTypes from './music.types';
import { addFileToPlayList } from './music.utils';

const INITIAL_STATE = {
  musicList: [],
  searchEntry: '',
  isFetching: false,
  error: null
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
        audioList: addFileToPlayList(state.playList, action.payload)
      }
    default:
      return state;
  }
}

export default musicReducer;