import { configureStore } from '@reduxjs/toolkit'
import goodsSlice  from '../features/goods/goodsSlice'

export const store = configureStore({
  reducer: {
    goods: goodsSlice
  },
})
