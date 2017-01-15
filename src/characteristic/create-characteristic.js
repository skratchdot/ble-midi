// @flow
import Characteristic from 'bleno/lib/characteristic';
import { MIDI_IO_CHARACTERISTIC_UID } from '../constants';
import onIndicate from './on-indicate';
import onNotify from './on-notify';
import onReadRequest from './on-read-request';
import onSubscribe from './on-subscribe';
import onUnsubscribe from './on-unsubscribe';
import onWriteRequest from './on-write-request';

export default () => {
  const characteristic = new Characteristic({
    uuid: MIDI_IO_CHARACTERISTIC_UID, // or 'fff1' for 16-bit
    properties: ['read', 'write', 'writeWithoutResponse', 'notify'], // can be a combination of 'read', 'write', 'writeWithoutResponse', 'notify', 'indicate'
    secure: ['read', 'write', 'writeWithoutResponse', 'notify'], // enable security for properties, can be a combination of 'read', 'write', 'writeWithoutResponse', 'notify', 'indicate'
    value: null, // optional static value, must be of type Buffer - for read only characteristics
    descriptors: [
      // see Descriptor for data type
    ],
    onReadRequest: onReadRequest, // optional read request handler, function(offset, callback) { ... }
    onWriteRequest: onWriteRequest, // optional write request handler, function(data, offset, withoutResponse, callback) { ...}
    onSubscribe: onSubscribe, // optional notify/indicate subscribe handler, function(maxValueSize, updateValueCallback) { ...}
    onUnsubscribe: onUnsubscribe, // optional notify/indicate unsubscribe handler, function() { ...}
    onNotify: onNotify, // optional notify sent handler, function() { ...}
    onIndicate: onIndicate // optional indicate confirmation received handler, function() { ...}
  });
  return characteristic;
};
