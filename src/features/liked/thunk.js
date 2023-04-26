import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


export const getLiked = createAsyncThunk('liked/getLiked', async () => {
    const res = await axios.get('http://localhost:3001/liked')

    return res.data
})

export const postLiked = createAsyncThunk('liked/postLiked', async (item) => {
    const res = await axios.post('http://localhost:3001/liked', item)

    return res.data
})

export const deleteLiked = createAsyncThunk('liked/deleteLiked', async (id) => {
    const res = await axios.delete('http://localhost:3001/liked' + '/' + id)

    return res.data
})