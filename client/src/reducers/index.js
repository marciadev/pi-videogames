import { GET_VIDEOGAMES, GET_GENRES } from "../actions";

const initialState = {
    videogames : [],
    filtered: [],
    genres: [],
    details: {},
    favourites:{}
}


function rootReducer(state = initialState, action){
    switch (action.type){
        case GET_VIDEOGAMES: 
            return {
                ...state,
                videogames: action.payload,
                filtered: action.payload,
            }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;