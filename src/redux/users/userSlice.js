import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://[::1]:3000/users';

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
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});
export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
