import { createSlice } from "@reduxjs/toolkit"
import { getGoods } from "./thunk"

const initialState = {
    data: [],
    status: 'idle',
    }

export const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        getGoodsFn: (state, action) => {
            state.data = state.data
        }
    },
    extraReducers(builder) {
      builder
      .addCase(getGoods.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(getGoods.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'fulfilled'
      })
      .addCase(getGoods.rejected, (state, action) => {
        state.status = 'rejected'
      })
  
    }
})
export const {
  getGoodsFn
} = goodsSlice.actions

export default goodsSlice.reducer

