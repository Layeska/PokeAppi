import { createSlice } from '@reduxjs/toolkit'

export const isLoadingSpinnerSlice = createSlice ({
    name: 'isLoading',
    initialState: true,
    reducers: {

    }
})


export const { } = isLoadingSpinnerSlice.actions
export default isLoadingSpinnerSlice.reducer