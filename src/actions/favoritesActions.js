export default getFavorites=()=>({
    type:"GET_FAVORITE"
});

export default addFavorites=(fav)=>({
    type:"ADD_FAVORITE",
    payload:fav
});

export default removeFavorites=(fav)=>({
    type:"REMOVE_FAVORITE",
    payload:fav
});