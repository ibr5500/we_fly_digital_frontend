import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import registerReducer from './users/registerSlice';
// import loginReducer from './users/loginSlice';
import airlineReducer from './airlines/airlines';

const logger = createLogger();

const store = configureStore({
  reducer: {
    airlines: airlineReducer,
    userInfo: registerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
