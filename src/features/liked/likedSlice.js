import { createSlice } from "@reduxjs/toolkit"
import { deleteLiked, getLiked, postLiked } from "./thunk"

const initialState = {
    data: [],
    data_id: []
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
      .addCase(postLiked.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(postLiked.fulfilled, (state, action) => {
        console.log(action.payload);
        state.data = [...state.data, action.payload]
        state.data_id = [...state.data_id, action.payload.id]
        console.log(state.data_id);
        state.status = 'fulfilled'
      })
      .addCase(postLiked.rejected, (state, action) => {
        state.status = 'rejected'
      })
      .addCase(deleteLiked.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(deleteLiked.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload]
        // state.data_id = []
        // state.data_id = [...state.data_id, action.payload.id]
        console.log(state.data);
        state.status = 'fulfilled'
      })
      .addCase(deleteLiked.rejected, (state, action) => {
        state.status = 'rejected'
      })
    }
})

export default likedSlice.reducer

export const {removeLiked, addLiked} = likedSlice.actions