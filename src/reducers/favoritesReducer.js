import initialState from './../store/initialState';

const favoritesReducer=(state=initialState.favorites,action)=>{
    switch(action.type){
        case "GET_FAVORITE":
            return state;
        case "ADD_FAVORITE":
            return {
                ...state,
                favoritesList:[...state.favoritesList,action.payload]
            }
        case "REMOVE_FAVORITE":
            return {
                ...state,
                favoritesList:state.favoritesList.filter(fav=> fav !=action.payload)
            }
        default:
            return state;
    }
}

export default favoritesReducer;