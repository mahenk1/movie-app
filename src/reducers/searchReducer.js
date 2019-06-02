//import initialState from './../store/initialState';
const searchState={
    results:{}
}

const searchActions=(state=searchState,action)=>{
    switch(action.type) {
        case "SEARCH_MOVIES":
            return{
                ...state,
                results:action.payload
            }
        default:
            return state;
    }
}

export default searchActions;