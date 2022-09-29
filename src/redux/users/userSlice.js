import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://[::1]:3000';

// export const postRegister = (newUser) => async (dispatch) => {
//   await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(newUser),
//   });
//   console.log((JSON.stringify(newUser)));
//   dispatch(registerUser(newUser));
// };

// const userReducer = (state = [], action) => {
//   switch (action.type) {
//     case REGISTER:
//       return [...state.user, action.payload];
//     case USERS:
//       return action.payload;

//     default: return state;
//   }
// };

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
