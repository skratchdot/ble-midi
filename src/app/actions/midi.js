/* eslint-env browser */
import * as types from '../constants/action-types';

export const getTimestampBytes = () => {
  const d = Date.now().toString(2).split('').reverse();
  const byte0 = ['1', '0', d[12], d[11], d[10], d[9], d[8], d[7]];
  const byte1 = ['1', d[6], d[5], d[4], d[3], d[2], d[1], d[0]];
  return {
    header: parseInt(byte0.join(''), 2),
    messageTimestamp: parseInt(byte1.join(''), 2)
  };
};

export const setChannel = channel => ({
  type: types.SET_MIDI_CHANNEL,
  payload: channel
});

export const setInstrument = channel => ({
  type: types.SET_MIDI_INSTRUMENT,
  payload: channel
});

export const sendPacket = (note, type) => async (dispatch, getState) => {
  const { bluetooth, midi } = getState();
  const characteristic = bluetooth.get('characteristic');
  if (!characteristic) {
    return Promise.resolve('Cannot send packet without characteristic');
  }
  const channel = midi.get('channel');
  const velocity = midi.get('velocity');
  const { header, messageTimestamp } = getTimestampBytes();
  const midiStatus = channel & 0x0f | type;
  const midiOne = note & 0x7f;
  const midiTwo = velocity & 0x7f;
  const packet = new Uint8Array([
    header,
    messageTimestamp,
    midiStatus,
    midiOne,
    midiTwo
  ]);
  return characteristic.writeValue(packet).then(result => dispatch({
    type: types.SET_MIDI_PACKET,
    payload: {
      packet,
      result
    }
  }));
};

export const midiOn = note => async (dispatch, getState) => {
  await dispatch(sendPacket(note, 0x90));
  const { midi } = getState();
  const notes = midi.get('notes');
  return dispatch({ type: types.SET_MIDI_NOTES, payload: notes.push(note) });
};

export const midiOff = note => async (dispatch, getState) => {
  await sendPacket(note, 0x80);
  const { midi } = getState();
  const notes = midi.get('notes');
  return dispatch({
    type: types.SET_MIDI_NOTES,
    payload: notes.filter(n => n !== note)
  });
};
