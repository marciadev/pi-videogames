import { GET_VIDEOGAMES, GET_GENRES, GET_DETAILS, GET_BY_GENRE, SEARCH_VIDEOGAME } from "../actions";

const initialState = {
    filtered: [],
    genres: [],
    details: []
}


function rootReducer(state = initialState, action){
    switch (action.type){
        case GET_VIDEOGAMES: 
            return {
                ...state,
                filtered: action.payload,
            }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GET_BY_GENRE:
            return {
                ...state,
                filtered: action.payload
            }
        case SEARCH_VIDEOGAME:
            return {
                ...state,
                filtered: state.filtered.filter(vg => vg.name === action.payload)
            }
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;