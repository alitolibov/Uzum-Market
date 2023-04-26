import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: JSON.parse(localStorage.getItem('cart')) || [],
    data_id: JSON.parse(localStorage.getItem('cart_id')) || [],
    total: JSON.parse(localStorage.getItem('total')) || 0,
    prices: JSON.parse(localStorage.getItem('prices')) || [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addGood: (state, {payload}) => {
            if(state.data_id.includes(payload.id)) {
                state.data = state.data.filter(item => item.id !== payload.id)
                state.data_id = state.data_id.filter(item => item !== payload.id)
                state.prices = state.prices.filter(el => el.id !== payload.id)
                localStorage.setItem('prices', JSON.stringify(state.prices))
                localStorage.setItem('cart', JSON.stringify(state.data))
                localStorage.setItem('cart_id', JSON.stringify(state.data_id))
            } else {
                state.data = [...state.data, {...payload.item, qt: payload.qt}]
                state.data_id = [...state.data_id, payload.id]
                localStorage.setItem('cart', JSON.stringify(state.data))
                localStorage.setItem('cart_id', JSON.stringify(state.data_id))
                state.prices = [...state.prices, {id: payload.id, price: Math.round(payload.item.price - (payload.item.price / 100 * payload.item?.salePercentage)) * +payload.qt}]
                localStorage.setItem('prices', JSON.stringify(state.prices))
            }
        },
        removeGood: (state, {payload}) => {
            state.data = state.data.filter(item => item.id !== payload.id)
            state.data_id = [...state.data_id, payload.id]
            state.prices = state.prices.filter(el => el.id !== payload.id)
            localStorage.setItem('prices', JSON.stringify(state.prices))
            localStorage.setItem('cart', JSON.stringify(state.data))
            localStorage.setItem('cart_id', JSON.stringify(state.data_id))
        },
        increment: (state, {payload}) => {
            state.data.filter(item => {
                if(item.id === payload.id) {
                    item.qt++
                }
            })
            // state.prices = state.prices.filter(el => {
            //     if(el.id === payload.id) {
            //         el.qt++
            //         // state.prices = [...state.prices, {id: payload.id, price: Math.round(payload.item.price - (payload.item.price / 100 * payload.item?.salePercentage)) * payload.qt}]
            //     }
                
            // })
            localStorage.setItem('cart', JSON.stringify(state.data))
        },
        decrement: (state, {payload}) => {
            state.data.filter(item => {
                if(item.id === payload.id) {
                    if(item.qt !== 1) {
                        item.qt--
                    }
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.data))
        },
    }
})

export default cartSlice.reducer

export const {addGood, removeGood, increment, decrement} = cartSlice.actions