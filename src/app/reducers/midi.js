/* eslint-env browser */
import * as types from '../constants/action-types';
import Immutable from 'immutable';

const midi = Immutable.Map({
  channel: 0,
  instrument: 0,
  notes: Immutable.List(),
  packet: [],
  velocity: 100
});

export default (state = midi, action) => {
  switch (action.type) {
    case types.SET_MIDI_CHANNEL:
      return state.set('channel', action.payload);
    case types.SET_MIDI_INSTRUMENT:
      return state.set('instrument', action.payload);
    case types.SET_MIDI_NOTES:
      return state.set('notes', action.payload);
    case types.SET_MIDI_PACKET:
      return state.set('packet', action.payload);
    case types.SET_MIDI_VELOCITY:
      return state.set('velocity', action.payload);
    default:
      return state;
  }
};
