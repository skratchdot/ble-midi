// @flow
import Info from './info';
import MessageUnknown from './message-unknown';
import { SYSEX_START } from '../constants';
import isBitOn from '../util/is-bit-on';
import parseFullMidiMessage from './parse-full-midi-message';
import parseRunningStatusMidiMessage from './parse-running-status-midi-message';
import parseSysex from './parse-sysex';

export default (packet: Buffer): Info => {
  const info = new Info(packet);
  if (info.isHeaderValid) {
    if (packet.length >= 2 && !isBitOn(packet[info.index], 7)) {
      parseSysex(info, false);
    }
    while (info.index < packet.length) {
      const byte1 = packet[info.index];
      const byte2 = packet[info.index + 1];
      const hasTimestamp = isBitOn(byte1, 7);
      const hasStatus = isBitOn(byte2, 7);
      if (hasTimestamp && hasStatus && byte2 === SYSEX_START) {
        parseSysex(info, true);
      } else if (hasTimestamp && hasStatus) {
        parseFullMidiMessage(info);
      } else if (!hasStatus) {
        parseRunningStatusMidiMessage(info, hasTimestamp);
      } else {
        info.events.push(
          new MessageUnknown(info.index, packet.slice(info.index))
        );
        info.index = packet.length;
      }
    }
  }
  return info;
};
