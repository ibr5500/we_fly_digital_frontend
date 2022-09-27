import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './users/users';
import detailsReducer from './details/details';

const rootReducer = combineReducers({
  users: userReducer,
  details: detailsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
