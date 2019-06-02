import axios from 'axios';
import env from './../environment';

export const searchMovieByName=(movie)=>{
    return {
      type:"SEARCH_MOVIES",
      payload:movie
    }
  }

export const searchMovieData = (title) => {
  let url = env.apiUrl+title+"&apikey="+env.apiKey;
    return function (dispatch) { 
      axios.get(url)
        .then((res) => dispatch(searchMovieByName(res.data)))
        .catch((response) => dispatch({
          type: "FETCH_WEATHER_FAILURE",
          error: response.error
        }))
    }
}