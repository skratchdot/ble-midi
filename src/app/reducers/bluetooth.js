/* eslint-env browser */
import * as types from '../constants/action-types';
import Immutable from 'immutable';

const bluetooth = Immutable.Map({
  characteristic: null,
  device: null,
  server: null,
  service: null,
  supported: navigator && navigator.bluetooth ? true : false,
  value: null
});

export default (state = bluetooth, action) => {
  switch (action.type) {
    case types.SET_BLUETOOTH_CHARACTERISTIC:
      return state.set('characteristic', action.payload);
    case types.SET_BLUETOOTH_DEVICE:
      return state.set('device', action.payload);
    case types.SET_BLUETOOTH_SERVER:
      return state.set('server', action.payload);
    case types.SET_BLUETOOTH_SERVICE:
      return state.set('service', action.payload);
    case types.SET_BLUETOOTH_SUPPORTED:
      return state.set('supported', action.payload);
    case types.SET_BLUETOOTH_VALUE:
      return state.set('value', action.payload);
    default:
      return state;
  }
};
