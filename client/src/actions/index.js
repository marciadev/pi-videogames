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
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/videogames")
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: GET_VIDEOGAMES,
          payload: data,
        });
      });
  };
}

export function getGenres() {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/genres")
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: GET_GENRES,
          payload: data,
        });
      });
  };
}

export function getByGenre(name) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/genres/${name}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: GET_BY_GENRE,
          payload: data,
        });
      })
      .catch((error) => {
        console.log("GENRE NOT FOUND", error);
      });
  };
}

export function searchVideogame(videogame) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/videogames?name=${videogame}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: SEARCH_VIDEOGAME,
          payload: data,
        });
      })
      .catch((error) => {
        alert("VIDEOGAME NOT FOUND", error);
      });
  };
}

export function getDetails(videogameId) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/videogames/${videogameId}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: GET_DETAILS,
          payload: data,
        });
      })
      .catch((error) => {
        alert("VIDEOGAME NOT FOUND", error);
      });
  };
}

export function filteredCreated(value) {
  return {
    type: FILTER_CREATED,
    payload: value,
  };
}

export function orderedByName(value) {
  return {
    type: ORDER_NAME,
    payload: value,
  };
}

export function orderedByRating(value) {
  return {
    type: ORDER_RATING,
    payload: value,
  };
}
