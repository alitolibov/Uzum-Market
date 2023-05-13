import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import goodsSlice  from '../features/goods/goodsSlice';
import likedSlice from '../features/liked/likedSlice';

export const store = configureStore({
  reducer: {
    goods: goodsSlice,
    liked: likedSlice,
    cart: cartSlice
  },
})
