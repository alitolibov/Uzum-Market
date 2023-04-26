import { createSlice } from "@reduxjs/toolkit"
import { getLiked } from "./thunk"

const initialState = {
    data: JSON.parse(localStorage.getItem('liked')) || [],
    data_id: JSON.parse(localStorage.getItem('liked_id')) || []
}

export const likedSlice = createSlice({
    name: "liked",
    initialState,
    reducers: {
        removeLiked: (state, {payload}) => {
            state.data = state.data.filter(item => item.id !== payload.id)
            state.data_id = state.data_id.filter(item => item !== payload.id)
            localStorage.setItem('liked', JSON.stringify(state.data))
            localStorage.setItem('liked_id', JSON.stringify(state.data_id))
        },
        addLiked: (state, {payload}) => {
            state.data = [...state.data, payload]
            state.data_id = [...state.data_id, payload.id]
            localStorage.setItem('liked', JSON.stringify(state.data))
            localStorage.setItem('liked_id', JSON.stringify(state.data_id))
        }
    },
    extraReducers(builder) {
      builder
      .addCase(getLiked.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(getLiked.fulfilled, (state, action) => {
        console.log(action.payload);
        state.data.push(...action.payload)
        state.status = 'fulfilled'
      })
      .addCase(getLiked.rejected, (state, action) => {
        state.status = 'rejected'
      })
  
    }
})

export default likedSlice.reducer

export const {removeLiked, addLiked} = likedSlice.actions