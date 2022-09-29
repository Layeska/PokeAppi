import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from '../slices/userName.slice'
import isLoadingSpinnerSlice from './isLoadingSpinner.slice'


export default configureStore ({
    reducer: {
        userName:  userNameSlice,
        isLoading: isLoadingSpinnerSlice
    }
})