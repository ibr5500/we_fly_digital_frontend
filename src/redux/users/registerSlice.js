import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/users'
const initialState = {
    loading: false,
    register: [],
    error: '',
}

const fetchNewUser = createAsyncThunk('register/fetchNewUser', async () => {
    return await fetch(url, {
        method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newUser),
    })
})

const registerSlice = createSlice({
    name: 'register',
    initialState,

})