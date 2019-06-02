import initialState from './../store/initialState';

const watchLaterReducer=(state=initialState.watch,action)=>{
    switch(action.type){
        case "GET_WATCH":
            return state;
        case "ADD_WATCH":
            return {
                ...state,
                watchList:[...state.watchList,action.payload]
            }
        case "REMOVE_WATCH":
            return {
                ...state,
                watchList:state.watchList.filter(fav=> fav !=action.payload)
            }
        default:
            return state;
    }
}

export default watchLaterReducer;