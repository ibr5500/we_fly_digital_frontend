import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import registerReducer from './users/registerSlice';
import loginReducer from './users/loginSlice';
import airlineReducer from './data/airlines';

const logger = createLogger();

const store = configureStore({
  reducer: {
    airlines: airlineReducer,
    register: registerReducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
