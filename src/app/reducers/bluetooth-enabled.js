import * as types from '../constants/action-types';

export default (state = false, action) => {
  switch (action.type) {
    case types.SET_BLUETOOTH_ENABLED:
      return action.payload;
    default:
      return state;
  }
};
