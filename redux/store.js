import {createStore} from 'redux';
import initialState from "./InitialState";
import appReducer from "./Reducers";

const store = createStore(
  appReducer,
  initialState,
);

export default store;
