import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: ['pampers', 'cheaps', 'apple']
}

export const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        getGoods: (state, action) => {
            state.data = state.data
        }
    }
})

export default goodsSlice.reducer
