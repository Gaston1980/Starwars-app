import { GET_ALL_CHARACTERS, GET_ALL_FILMS,GET_ALL_PLANETS, GET_CHARACTER_DETAILS, GET_FILM_DETAILS, GET_PLANET_DETAILS, REINICIAR_CHARACTERS, CLEAN_CHARACTER_STATE, CLEAN_FILM_STATE, CLEAN_PLANET_STATE} from "../actions"



const initialState = {
    characters: [], 
    character: {},
    films:[],
    film:{},
    planets:[],
    planet:{},
    characterrenderizado:[],
    filmsrenderizado:[],
    planetsrenderizado:[]    
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_CHARACTERS: {
            let cleanCharacters = []
            action.payload.map(character => cleanCharacters.push({
            _id: character._id,
            name: character.name,
            img: character.img
            }))
            let filteredCharacters = cleanCharacters.filter(character => character._id !== "1000")
            return {
                ...state,
                characters: action.payload, 
                characterrenderizado: [...filteredCharacters] ,
            }}
        case GET_ALL_FILMS: {
            let cleanFilms = []
            action.payload.map(film => cleanFilms.push({
            _id: film._id,
            title: film.title,
            img: film.img
                }))
            let filteredFilms = cleanFilms.filter(film => film._id !== "1000")
            return {
                ...state,
                films: action.payload, 
                filmsrenderizado: [...filteredFilms] ,
                }}
        case GET_ALL_PLANETS: {
            let cleanPlanets = []
            action.payload.map(planet => cleanPlanets.push({
            _id: planet._id,
            name: planet.name,
            img: planet.img
                }))
            let filteredPlanets = cleanPlanets.filter(planet => planet._id !== "1000")
            return {
                ...state,
                planets: action.payload, 
                planetsrenderizado: [...filteredPlanets] ,
                }}
        case GET_CHARACTER_DETAILS:{
            {let homeworldNew = action.payload.homeworld.name;
            let homeworldId = action.payload.homeworld._id;
            action.payload.homeworld = homeworldNew
            action.payload.homeworldId = homeworldId
            return {
                ...state,
                character: action.payload //manipulado arriba
            }}}
        case GET_FILM_DETAILS:{
            { let dateNew = action.payload.release_date.slice(0,10);
            action.payload.release_date = dateNew
            return {
                ...state,
                film: action.payload //manipulado arriba
            }}}  
        case GET_PLANET_DETAILS:{
            return {
                ...state,
                planet: action.payload 
            }}
        case REINICIAR_CHARACTERS:
            return {
                ...state,
                characterrenderizado: [...state.characters]
            }
        case CLEAN_CHARACTER_STATE:
            return {
                ...state,
                character: {}
                }
        case CLEAN_FILM_STATE:
            return {
                ...state,
                film: {}
                }
        case CLEAN_PLANET_STATE:
            return {
                ...state,
                planet: {}
                }
            default: 
            return state
    }
}
