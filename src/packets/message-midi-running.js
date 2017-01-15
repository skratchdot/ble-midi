// @flow
import MessageMidi from './message-midi';

export default class MessageMidiRunning extends MessageMidi {
  constructor(
    timestamp: number,
    midiStatus: number,
    midiOne: number,
    midiTwo: number
  ) {
    super('runningMidiMessage', timestamp, midiStatus, midiOne, midiTwo);
  }
}
