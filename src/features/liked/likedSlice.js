import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: JSON.parse(localStorage.getItem('liked')) || []
}

export const likedSlice = createSlice({
    name: "liked",
    initialState,
    reducers: {
        removeLiked: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload)
            localStorage.setItem('liked', JSON.stringify(state.data))
        },
        addLiked: (state, action) => {
            state.data = [...state.data, action.payload]
            localStorage.setItem('liked', JSON.stringify(state.data))
        }
    }
})

export default likedSlice.reducer

export const {removeLiked, addLiked} = likedSlice.actions