export default getWatchList=()=>({
    type:"GET_WATCH"
});

export default addToWatchList=(watchId)=>({
    type:"ADD_WATCH",
    payload:watchId
});

export default removeFromWatchList=(watchId)=>({
    type:"REMOVE_WATCH",
    payload:watchId
});