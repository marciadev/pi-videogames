import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_BY_GENRE = "GET_BY_GENRE";
export const SEARCH_VIDEOGAME = "SEARCH_VIDEOGAME";
export const GET_DETAILS = "GET_DETAILS";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_RATING = "ORDER_RATING";

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

export function getByGenre(name) {
  return async function (dispatch) {
    try {
      let response = await axios.get(`http://localhost:3001/genres/${name}`);
      return dispatch({
        type: GET_BY_GENRE,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchVideogame(videogame) {
  return async function (dispatch) {
    try {
      let search = await axios.get(
        `http://localhost:3001/videogames?name=${videogame}`
      );
      return dispatch({
        type: SEARCH_VIDEOGAME,
        payload: search.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetails(videogameId) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`http://localhost:3001/videogames/${videogameId}`)
      return dispatch({
        type: GET_DETAILS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filteredCreated(value){
  return {
    type: FILTER_CREATED,
    payload: value
  }
}

export function orderedByName(value){
  return {
    type: ORDER_NAME,
    payload: value
  }
}

export function orderedByRating(value){
  return {
    type: ORDER_RATING,
    payload: value
  }
}
