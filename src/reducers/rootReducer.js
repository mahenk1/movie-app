import searchReducer from './searchReducer';
import favoritesReducer from './favoritesReducer';
import watchLaterReducer  from './watchLaterReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    searchReducer,
    favoritesReducer,
    watchLaterReducer
});