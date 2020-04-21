import { combineReducers } from 'redux';

import account from "./account/reducers";

const appReducer = combineReducers({
  account,
});

export default appReducer
