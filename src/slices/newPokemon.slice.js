import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { setIsLoading } from './isLoadingSpinner.slice'

export const newPokemonSlice = createSlice ({
    name: 'listPokemon',
    initialState: {},
    reducers: {
        setPokemon: (status, action) => {
            return action.payload
        }
    }
})


export const getPokemon = () => (dispatch) => {
dispatch(setIsLoading(true))
    axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => setPokemon(res.data.results))
    .finally(() => dispatch(setIsLoading(false)))
}

export const { setPokemon } = newPokemonSlice.actions
export default newPokemonSlice.reducer