import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import registerReducer from './users/registerSlice';
import airlineReducer from './airlines/airlines';
import reservationReducer from './reservations/reservations';

const logger = createLogger();

const store = configureStore({
  reducer: {
    airlines: airlineReducer,
    userInfo: registerReducer,
    reservations: reservationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
