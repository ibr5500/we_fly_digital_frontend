import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './users/registerSlice';
import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './users/registerSlice';

const store = configureStore({
  reducer: {
    register: registerReducer,
  }
})

export default store;
