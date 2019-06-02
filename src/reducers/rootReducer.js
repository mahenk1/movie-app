import searchReducer from './searchReducer';
import favoritesReducer from './favoritesReducer';
import watchLaterReducer  from './watchLaterReducer';

const rootReducer=()=>({
    searchReducer,
    favoritesReducer,
    watchLaterReducer
});

export default rootReducer;