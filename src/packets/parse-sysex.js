// @flow
import type Info from './info';
import MessageMidiSysex from './message-midi-sysex';
import { SYSEX_END } from '../constants';
import isBitOn from '../util/is-bit-on';

export default (info: Info, isStart: boolean) => {
  let isEnd = false;
  if (isStart) {
    info.index += 2;
  }
  let data = info.packet.slice(info.index);
  const len = data.length;
  if (len >= 2 && isBitOn(data[len - 2], 7) && data[len - 1] === SYSEX_END) {
    isEnd = true;
    data = data.slice(0, len - 2);
  }
  info.events.push(new MessageMidiSysex(isStart, isEnd, data));
  // stop parsing
  info.index = info.packet.length;
};
