/* eslint-env browser */
import * as types from '../constants/action-types';

export default (state = false, action) => {
  switch (action.type) {
    case types.SET_MOUSE_DOWN:
      return action.payload;
    default:
      return state;
  }
};
