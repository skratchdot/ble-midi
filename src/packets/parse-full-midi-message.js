// @flow
import type Info from './info';
import MessageMidiFull from './message-midi-full';
import getTimestamp from '../util/get-timestamp';
import getTimestampLow from '../util/get-timestamp-low';

export default (info: Info) => {
  // timestamp
  info.timestampLow = getTimestampLow(info.packet[info.index++]);
  info.timestamp = getTimestamp(info.timestampHigh, info.timestampLow);
  // status
  info.midiStatus = info.packet[info.index++];
  const midiOne = info.packet[info.index++];
  const midiTwo = info.packet[info.index++];
  info.events.push(
    new MessageMidiFull(info.timestamp, info.midiStatus, midiOne, midiTwo)
  );
};
