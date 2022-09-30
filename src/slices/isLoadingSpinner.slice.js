import { createSlice } from '@reduxjs/toolkit'

export const isLoadingSpinnerSlice = createSlice ({
    name: 'isLoading',
    initialState: true,
    reducers: {
        setIsLoading: (state,action) => {
            const isLoading = action.payload
            return isLoading
        }
    }
})


export const { setIsLoading } = isLoadingSpinnerSlice.actions
export default isLoadingSpinnerSlice.reducer