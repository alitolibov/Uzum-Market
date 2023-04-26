import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


export const getGoods = createAsyncThunk('goods/getGoods', async () => {
    const res = await axios.get('http://localhost:3001/data')

    return res.data
})