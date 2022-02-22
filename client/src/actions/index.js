import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_DETAILS = "GET_DETAILS"

export function getVideogames() {
  return async function (dispatch) {
    const json = await axios("http://localhost:3001/videogames");
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: json.data,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    let response = await axios.get("http://localhost:3001/genres");
    return dispatch({
      type: GET_GENRES,
      payload: response.data,
    });
  };
}

export function getDetails(videogameId){
  return async function (dispatch) {
    try{
      let json = await axios.get(`http://localhost:3001/${videogameId}`);
      return dispatch ({
        type: GET_DETAILS,
        payload: json.data
      })
    } catch (error){
      console.log(error)
    }
  }
}
