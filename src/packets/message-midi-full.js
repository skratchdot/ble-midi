// @flow
import MessageMidi from './message-midi';

export default class MessageMidiFull extends MessageMidi {
  constructor(
    timestamp: number,
    midiStatus: number,
    midiOne: number,
    midiTwo: number
  ) {
    super('fullMidiMessage', timestamp, midiStatus, midiOne, midiTwo);
  }
}
