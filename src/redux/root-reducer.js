import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import musicReducer from './music/music.reducer';
import fileReducer from './files/files.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['file', 'music']
}
const rootReducer = combineReducers({
    music: musicReducer,
    file: fileReducer,
    user: userReducer
});

export default persistReducer(persistConfig, rootReducer)


