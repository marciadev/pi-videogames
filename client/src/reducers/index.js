import {
  GET_VIDEOGAMES,
  GET_GENRES,
  GET_DETAILS,
  GET_BY_GENRE,
  SEARCH_VIDEOGAME,
  FILTER_CREATED,
  ORDER_NAME,
  ORDER_RATING
} from "../actions";

const initialState = {
  videogames: [],
  filtered: [],
  genres: [],
  details: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        filtered: action.payload,
        videogames: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_BY_GENRE:
      return {
        ...state,
        filtered: action.payload,
      };
    case SEARCH_VIDEOGAME:
      return {
        ...state,
        filtered: state.filtered.filter((vg) => vg.name === action.payload),
      };
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case FILTER_CREATED:
      const allGames = state.videogames;
      const videogamesCreated = action.payload === "created"
          ? allGames.filter((el) => el.createdInDb)
          : allGames.filter((el) => !el.createdInDb);
      return {
        ...state,
        filtered: action.payload === "All" ? state.videogames : videogamesCreated,
      };
    case ORDER_NAME:
      const games = action.payload === "asc"
          ? state.filtered.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.filtered.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        filtered: games,
      };
    case ORDER_RATING:
        const gamesRating = action.payload === "asc"
          ? state.filtered.sort((a, b) => {
              if (a.rating > b.rating) {
                return 1;
              }
              if (b.rating > a.rating) {
                return -1;
              }
              return 0;
            })
          : state.filtered.sort((a, b) => {
              if (a.rating > b.rating) {
                return -1;
              }
              if (b.rating > a.rating) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        filtered: gamesRating,
      };

    default:
      return state;
  }
}

export default rootReducer;
