import { configureStore } from '@reduxjs/toolkit'
import goodsSlice  from '../features/goods/goodsSlice'
import likedSlice from '../features/liked/likedSlice'

export const store = configureStore({
  reducer: {
    goods: goodsSlice,
    liked: likedSlice
  },
})
