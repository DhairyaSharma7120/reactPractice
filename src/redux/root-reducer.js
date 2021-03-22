import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const presistConfig = {
    key: 'root',
    storage,
    
}

const rootReducer = combineReducers({
    user: userReducer,
   
})

export default persistReducer(presistConfig, rootReducer);