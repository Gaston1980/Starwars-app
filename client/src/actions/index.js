import axios from "axios"

export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS"; //para que no haya errores de tipeo
export const CREATE_CHARACTER = "CREATE_CHARACTER";
export const GET_CHARACTER_DETAILS = "GET_CHARACTER_DETAILS";
export const GET_FILM_DETAILS = "GET_FILM_DETAILS";
export const GET_PLANET_DETAILS = "GET_PLANET_DETAILS";
export const GET_CHARACTER_BY_NAME = "GET_CHARACTER_BY_NAME"
export const GET_ALL_FILMS = "GET_ALL_FILMS"
export const GET_ALL_PLANETS = "GET_ALL_PLANETS"
export const REINICIAR_CHARACTERS = "REINICIAR_CHARACTERS"
export const DELETE_CHARACTER_DB = "DELETE_CHARACTER_DB"
export const UPDATE_CHARACTER = "UPDATE_CHARACTER"
export const CLEAN_CHARACTER_STATE = "CLEAN_CHARACTER_STATE"
export const CLEAN_FILM_STATE = "CLEAN_FILM_STATE"
export const CLEAN_PLANET_STATE = "CLEAN_PLANET_STATE"

export const getAllCharacters = () => dispatch => {
    return fetch('http://localhost:8000/characters') // {status: pending, result:undefined}
    .then(res => res.json()) // SH -->{status:fulfilled, result:value}
    .then(obj => dispatch({type: GET_ALL_CHARACTERS, payload: obj.data}))
    .catch(err => console.log(err))// EH-->{status:rejected, result:error}
    }

    export const getAllFilms = () => dispatch => {
        return fetch('http://localhost:8000/films') // {status: pending, result:undefined}
        .then(res => res.json()) // SH -->{status:fulfilled, result:value}
        .then(obj => dispatch({type: GET_ALL_FILMS, payload: obj.data}))
        .catch(err => console.log(err))// EH-->{status:rejected, result:error}
        }

    export const getAllPlanets = () => dispatch => {
        return fetch('http://localhost:8000/planets') // {status: pending, result:undefined}
        .then(res => res.json()) // SH -->{status:fulfilled, result:value}
        .then(obj => dispatch({type: GET_ALL_PLANETS, payload: obj.data}))
        .catch(err => console.log(err))// EH-->{status:rejected, result:error}
        }
/*export const getCharacterByName = (name) => dispatch => {
    return fetch(`http://localhost:8000/characters/${name}`) //query
    .then(res => res.json())
    .then(obj => dispatch({type: GET_CHARACTER_BY_NAME, payload: obj}))
    .catch(err => console.log(err))
    }*/
 
export const getCharacterDetails = (id) => dispatch => {
    return fetch(`http://localhost:8000/characters/${id}`) // Params
    .then(res => res.json())
    .then(obj => dispatch({type: GET_CHARACTER_DETAILS, payload: obj.data}))
    .catch(err => console.log(err))
    }

    export const getFilmDetails = (id) => dispatch => {
        return fetch(`http://localhost:8000/films/${id}`) // Params
        .then(res => res.json())
        .then(obj => dispatch({type: GET_FILM_DETAILS, payload: obj.data}))
        .catch(err => console.log(err))
        }
        export const getPlanetDetails = (id) => dispatch => {
            return fetch(`http://localhost:8000/planets/${id}`) // Params
            .then(res => res.json())
            .then(obj => dispatch({type: GET_PLANET_DETAILS, payload: obj.data}))
            .catch(err => console.log(err))
            }


export const createCharacter = (payload) => dispatch => {
    return axios.post("http://localhost:3001/pokemons/",payload) // body
    .then(res => dispatch({type: CREATE_CHARACTER, payload: res.data}) )
    .catch(err => console.log(err))
    }

export const updateCharacter = (payload) => dispatch => {
    return axios.put("http://localhost:3001/pokemons/",payload)// body
    .then(res => dispatch({type: UPDATE_CHARACTER, payload: res.data}) )
    .catch(err => console.log(err))
    }

    export const getCharacterByName = (payload) => {
        return {
            type: GET_CHARACTER_BY_NAME,
            payload
            }} 

        



export const reiniciarCharacters = (payload) => {
    return {
        type: REINICIAR_CHARACTERS,
        payload
        }} 
        
export const cleanCharacterState = (payload) => {
    return {
        type: CLEAN_CHARACTER_STATE,
        payload
        }}
        
export const cleanFilmState = (payload) => {
    return {
        type: CLEAN_FILM_STATE,
        payload
        }}  
export const cleanPlanetState = (payload) => {
    return {
        type: CLEAN_PLANET_STATE,
        payload
        }}
        
export const deleteCharacterDB  = (id) => dispatch => {
    return axios.delete(`http://localhost:3001/pokemons/${id}`)
    .then(res => dispatch({type: DELETE_CHARACTER_DB, payload: res.data}) )
    .catch(err => console.log("CatchAction:",err))
    }






    




/*
export const deletepokemonDB = (id) =>  async (dispatch) => {
    try {
    const axiosResponse = await axios.delete(`http://localhost:3001/pokemons/${id}`)
    return dispatch({type: DELETE_POKEMON_DB, payload: axiosResponse.data})
    } catch(error) {console.log("Catch:",error)}
} 
*/



