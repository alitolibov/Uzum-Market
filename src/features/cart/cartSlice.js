import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: JSON.parse(localStorage.getItem('cart')) || [],
    data_id: JSON.parse(localStorage.getItem('cart_id')) || [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addGood: (state, {payload}) => {
            if(state.data_id.includes(payload.id)) {
                state.data = state.data.filter(item => item.id !== payload.id)
                state.data_id = state.data_id.filter(item => item !== payload.id)
                localStorage.setItem('cart', JSON.stringify(state.data))
                localStorage.setItem('cart_id', JSON.stringify(state.data_id))
            } else {
                state.data = [...state.data, {...payload.item, qt: payload.qt}]
                state.data_id = [...state.data_id, payload.id]
                localStorage.setItem('cart', JSON.stringify(state.data))
                localStorage.setItem('cart_id', JSON.stringify(state.data_id))
                
            }
        },
        removeGood: (state, {payload}) => {
            state.data = state.data.filter(item => item.id !== payload.id)
            localStorage.setItem('cart', JSON.stringify(state.data))
            localStorage.setItem('cart_id', JSON.stringify(state.data_id))
        },
        increment: (state, {payload}) => {
            state.data.filter(item => {
                if(item.id === payload.id) {
                    item.qt++
                }
            })
        },
        decrement: (state, {payload}) => {
            state.data.filter(item => {
                if(item.id === payload.id) {
                    if(item.qt !== 1) {
                        item.qt--
                    }
                }
            })
        }
    }
})

export default cartSlice.reducer

export const {addGood, removeGood, increment, decrement} = cartSlice.actions