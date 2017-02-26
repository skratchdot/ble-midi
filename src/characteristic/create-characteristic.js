// @flow
import Characteristic from 'bleno/lib/characteristic';
import { MIDI_IO_CHARACTERISTIC_UID } from '../constants';
import defaultHandler from '../util/default-handler';
import onReadRequest from './on-read-request';
import onWriteRequest from './on-write-request';

export default (onIncomingPacket: Function) => {
  const characteristic = new Characteristic({
    uuid: MIDI_IO_CHARACTERISTIC_UID, // or 'fff1' for 16-bit
    properties: ['read', 'write', 'writeWithoutResponse', 'notify'], // can be a combination of 'read', 'write', 'writeWithoutResponse', 'notify', 'indicate'
    secure: ['read', 'write', 'writeWithoutResponse', 'notify'], // enable security for properties, can be a combination of 'read', 'write', 'writeWithoutResponse', 'notify', 'indicate'
    value: null, // optional static value, must be of type Buffer - for read only characteristics
    descriptors: [
      // see Descriptor for data type
    ],
    onReadRequest: onReadRequest,
    onWriteRequest: onWriteRequest.bind(null, onIncomingPacket)
  });
  [
    'indicate',
    'notify',
    'subscribe',
    'unsubscribe'
  ].forEach(name => characteristic.on(name, defaultHandler(name)));
  return characteristic;
};
