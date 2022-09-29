import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/login';
const initialState = {
  loading: false,
  login: [],
  error: '',
};

export const fetchCurrentUser = createAsyncThunk('login/fetchCurrentUser', async (currentUser) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  });
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
