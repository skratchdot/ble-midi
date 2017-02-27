import * as types from '../constants/action-types';

export const setBlueToothEnabled = enabled => ({
  type: types.SET_BLUETOOTH_ENABLED,
  payload: enabled
});
