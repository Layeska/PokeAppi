import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from '../slices/userName.slice'
import isLoadingSpinnerSlice from '../slices/isLoadingSpinner.slice'
import newPokemonSlice from '../slices/newPokemon.slice'


export default configureStore ({
    reducer: {
        userName:  userNameSlice,
        isLoading: isLoadingSpinnerSlice,
        listPokemon: newPokemonSlice
    }
})