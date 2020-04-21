import {
  SET_USERNAME,
} from "./actions";
import initialState from "./initialState";

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return {...state, username: action.payload.username};

    default:
      return state;
  }
}

export default accountReducer
