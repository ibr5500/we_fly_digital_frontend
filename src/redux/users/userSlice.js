import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//
// Delete this page before lunching !!!
//

const url = 'http://[::1]:3000';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await fetch(url);
  const resJson = await res.json();
  return resJson;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      const stateLoading = state;

      stateLoading.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      const stateFulfilled = state;

      stateFulfilled.loading = false;
      stateFulfilled.users = action.payload;
      stateFulfilled.error = '';
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      const stateRejected = state;

      stateRejected.loading = false;
      stateRejected.users = [];
      stateRejected.error = action.error.message;
    });
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
