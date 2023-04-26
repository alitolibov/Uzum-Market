import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


export const getLiked = createAsyncThunk('liked/getLiked', async () => {
    const res = await axios.get('http://localhost:3001/liked')

    return res.data
})