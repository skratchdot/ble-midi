/* eslint-env browser */
import * as types from '../constants/action-types';
import { MIDI_IO_CHARACTERISTIC_UID, MIDI_SERVICE_UID } from '../../constants';

export const setBluetoothSupported = enabled => ({
  type: types.SET_BLUETOOTH_SUPPORTED,
  payload: enabled
});

export const getDevice = () => async dispatch => {
  const device = await navigator.bluetooth.requestDevice({
    filters: [{ services: [MIDI_SERVICE_UID] }]
  });
  return dispatch({ type: types.SET_BLUETOOTH_DEVICE, payload: device });
};

export const getServer = () => async (dispatch, getState) => {
  const { bluetooth } = getState();
  const server = await bluetooth.get('device').gatt.connect();
  return dispatch({ type: types.SET_BLUETOOTH_SERVER, payload: server });
};

export const getService = () => async (dispatch, getState) => {
  const { bluetooth } = getState();
  const service = await bluetooth
    .get('server')
    .getPrimaryService(MIDI_SERVICE_UID);
  return dispatch({ type: types.SET_BLUETOOTH_SERVICE, payload: service });
};

export const getCharacteristic = () => async (dispatch, getState) => {
  const { bluetooth } = getState();
  const characteristic = await bluetooth
    .get('service')
    .getCharacteristic(MIDI_IO_CHARACTERISTIC_UID);
  return dispatch({
    type: types.SET_BLUETOOTH_CHARACTERISTIC,
    payload: characteristic
  });
};

export const getValue = () => async (dispatch, getState) => {
  const { bluetooth } = getState();
  const value = await bluetooth.get('characteristic').readValue();
  return dispatch({ type: types.SET_BLUETOOTH_VALUE, payload: value });
};

export const startScan = () => async dispatch => {
  await dispatch(getDevice());
  await dispatch(getServer());
  await dispatch(getService());
  await dispatch(getCharacteristic());
  await dispatch(getValue());
};
