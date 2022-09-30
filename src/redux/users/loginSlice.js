import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseURL from '../api';

const initialState = {
  loading: false,
  login: [],
  error: '',
};

export const fetchCurrentUser = createAsyncThunk('login/fetchCurrentUser', (currentUser) => {
  const res = fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
  return res;
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentUser.pending, (state) => {
      const stateLoading = state;
      stateLoading.loading = true;
    });

    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      const stateFulfilled = state;
      stateFulfilled.loading = false;
      stateFulfilled.login = action.payload;
      stateFulfilled.error = '';
    });

    builder.addCase(fetchCurrentUser.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.loading = false;
      stateRejected.login = [];
      stateRejected.error = action.error.message;
    });
  },
});

const loginReducer = loginSlice.reducer;

export default loginReducer;
