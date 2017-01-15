// @flow
import type Message from './message';
import getTimestampHigh from '../util/get-timestamp-high';
import isBitOn from '../util/is-bit-on';

export default class Info {
  packet: Buffer;
  events: Array<Message>;
  isHeaderValid: boolean;
  index: number;
  timestampHigh: number;
  timestampLow: number;
  timestamp: number;
  midiStatus: number;
  constructor(packet: Buffer) {
    const header = packet[0];
    this.packet = packet;
    this.events = [];
    this.isHeaderValid = isBitOn(header, 7);
    this.index = 1;
    this.timestampHigh = getTimestampHigh(header);
    this.timestampLow = -1;
    this.timestamp = -1;
    this.midiStatus = -1;
  }
}
