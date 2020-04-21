import {AsyncStorage} from "react-native";

export const SET_USERNAME = 'SET_USERNAME';

export const ASYNC_USERNAME = 'ASYNC_USERNAME';

export function init(store) {
  AsyncStorage.getItem(ASYNC_USERNAME, (error, result) => {
    if (result != null) {
      store.dispatch(setUsername(result));
    }
  });
}

export function setUsername(username) {
  AsyncStorage.setItem(ASYNC_USERNAME, username);
  return {
    type: SET_USERNAME,
    payload: {
      username
    }
  }
}
