import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; import baseURL from '../api';

const initialState = {
  airlines: [],
  error: '',
};

export const fetchAirlines = createAsyncThunk('airline/fetchAirlines', async () => {
  const res = await fetch(`${baseURL}/airlines`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('loginToken')}`,
    },
  });
  const resJson = await res.json();
  return resJson;
});

export const addNewAirlines = createAsyncThunk('airline/fetchNewAirlines', async (newAirline) => {
  const res = fetch(`${baseURL}/airlines`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('loginToken')}`,
    },
    body: JSON.stringify(newAirline),
  }).then((res) => res.json());
  return res;
});

// export const getAirlineDetails = createAsyncThunk('airline/getAirlineDetails', async (id) => {
//  const res = fetch(`${baseURL}/airlines/${id}`, {
//    headers: {
//      'Content-type': 'application/json',
//    },
//  }).then((res) => res.json());
//  return res;
// });

const airlineSlice = createSlice({
  name: 'airline',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAirlines.fulfilled, (state, action) => {
      const stateFulfilled = state;
      stateFulfilled.airlines = action.payload;
    });

    builder.addCase(fetchAirlines.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.error = action.error.message;
    });

    builder.addCase(addNewAirlines.fulfilled, (state, action) => {
      const stateFulfilled = state;
      stateFulfilled.airlines = action.payload;
    });

    builder.addCase(addNewAirlines.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.error = action.payload.error;
    });

    // builder.addCase(getAirlineDetails.fulfilled, (state, action) => {
    //  const stateFulfilled = state;
    //  stateFulfilled.airlines = action.payload;
    // });

    // builder.addCase(getAirlineDetails.rejected, (state, action) => {
    //  const stateRejected = state;
    //  stateRejected.error = action.payload.error;
    // });
  },
});

const airlineReducer = airlineSlice.reducer;
export default airlineReducer;
