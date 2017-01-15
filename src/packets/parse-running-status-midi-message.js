// @flow
import type Info from './info';
import MessageMidiRunning from './message-midi-running';
import getTimestamp from '../util/get-timestamp';
import getTimestampLow from '../util/get-timestamp-low';

export default (info: Info, hasTimestamp: boolean) => {
  // timestamp
  if (hasTimestamp) {
    info.timestampLow = getTimestampLow(info.packet[info.index++]);
    info.timestamp = getTimestamp(info.timestampHigh, info.timestampLow);
  }
  const midiOne = info.packet[info.index++];
  const midiTwo = info.packet[info.index++];
  info.events.push(
    new MessageMidiRunning(info.timestamp, info.midiStatus, midiOne, midiTwo)
  );
};
