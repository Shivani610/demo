import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const userLogin = createAsyncThunk("auth/login", async (userData, { rejectWithValue, getstate }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/user/login", userData)
        console.log(data.result);
        return data.result
    } catch (error) {
        console.log(error);
        return rejectWithValue(error)
    }
})
export const userRegister = createAsyncThunk("auth/register", async (userData, { rejectWithValue, getstate }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/user/signup", userData)
        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})
