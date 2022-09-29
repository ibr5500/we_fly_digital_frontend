import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import userReducer from './users/userSlice';
import registerReducer from './users/registerSlice';

const logger = createLogger();

const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
