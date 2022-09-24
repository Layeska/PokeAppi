import { createSlice } from '@reduxjs/toolkit'

export const userNameSlice = createSlice ({
    name: 'userName',
    initialState: '',
    reducers: {
        changeUser: (state, action) => {
            const user = action.payload
            return user
        }
    }
})


export const { changeUser } = userNameSlice.actions
export default userNameSlice.reducer