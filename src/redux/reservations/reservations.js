import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; import baseURL from '../api';

const initialState = {
  reservations: [],
  error: '',
};

export const fetchReservations = createAsyncThunk('reservation/fetchReservations', async () => {
  const res = await fetch(`${baseURL}/reservations`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('loginToken')}`,
    },
  });
  const resJson = await res.json();
  return resJson;
});

export const addNewReservations = createAsyncThunk('reservation/addNewReservations', async (newReservation) => {
  const res = fetch(`${baseURL}/reservations`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('loginToken')}`,
    },
    body: JSON.stringify(newReservation),
  }).then((res) => res.json());
  return res;
});

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      const stateFulfilled = state;
      stateFulfilled.reservations = action.payload;
    });

    builder.addCase(fetchReservations.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.error = action.error.message;
    });

    builder.addCase(addNewReservations.fulfilled, (state, action) => {
      const stateFulfilled = state;
      stateFulfilled.reservations = action.payload;
    });

    builder.addCase(addNewReservations.rejected, (state, action) => {
      const stateRejected = state;
      stateRejected.error = action.payload.error;
    });
  },
});

const reservationReducer = reservationSlice.reducer;
export default reservationReducer;
