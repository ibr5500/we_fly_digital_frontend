import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseURL from '../api';

const initialState = {
  loading: false,
  airlines: [],
  error: '',
};

export const fetchAirlines = createAsyncThunk('airline/fetchAirlines', async () => {
  const res = await fetch(`${baseURL}/airlines`);
  const resJson = await res.json();
  return resJson;
});

const airlineSlice = createSlice({
  name: 'airline',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAirlines.pending, (state) => {
      const stateLoading = state;
      stateLoading.loading = true;
    });

    builder.addCase(fetchAirlines.fulfilled, (state, action) => {
      const stateFulfilled = state;
      stateFulfilled.loading = false;
      stateFulfilled.airlines = action.payload;
      stateFulfilled.error = '';
    });

    builder.addCase(fetchAirlines.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.loading = false;
      stateRejected.airlines = [];
      stateRejected.error = action.error.message;
    });
  },
});

const airlineReducer = airlineSlice.reducer;
export default airlineReducer;
