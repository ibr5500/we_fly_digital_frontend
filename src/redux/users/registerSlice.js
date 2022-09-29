import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/users';
const initialState = {
  loading: false,
  register: [],
  error: '',
};

export const fetchNewUser = createAsyncThunk('register/fetchNewUser', async (newUser) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
});

const registerSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchNewUser.pending, (state) => {
      const stateLoading = state;
      stateLoading.loading = true;
    });

    builder.addCase(fetchNewUser.fulfilled, (state, action) => {
      const stateFulfilled = state;
      stateFulfilled.loading = false;
      stateFulfilled.register = action.payload;
      stateFulfilled.error = '';
    });

    builder.addCase(fetchNewUser.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.loading = false;
      stateRejected.register = [];
      stateRejected.error = action.error.message;
    });
  },
});

const registerReducer = registerSlice.reducer;

export default registerReducer;
