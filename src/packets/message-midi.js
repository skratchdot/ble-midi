// @flow
import Message from './message';

export default class MessageMidi extends Message {
  timestamp: number;
  midiStatus: number;
  midiOne: number;
  midiTwo: number;
  constructor(
    type: string,
    timestamp: number,
    midiStatus: number,
    midiOne: number,
    midiTwo: number
  ) {
    super(type);
    this.timestamp = timestamp;
    this.midiStatus = midiStatus;
    this.midiOne = midiOne;
    this.midiTwo = midiTwo;
  }
}
