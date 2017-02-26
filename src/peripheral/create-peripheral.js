// @flow
import Bleno from 'bleno/lib/bleno';
import { DEFAULT_SERVICE_NAME } from '../constants';
import defaultHandler from '../util/default-handler';
import handleAdvertisingStart from './handle-advertising-start';
import handleStateChange from './handle-state-change';
import noop from '../util/noop';

export default (name: string = DEFAULT_SERVICE_NAME, onIncomingPacket: Function = noop) => {
  const bleno = new Bleno();
  bleno.on('stateChange', handleStateChange.bind(bleno, bleno, name));
  bleno.on('advertisingStart', handleAdvertisingStart.bind(bleno, bleno, onIncomingPacket));
  [
    'platform',
    'addressChange',
    'advertisingStop',
    'servicesSet',
    'accept',
    'mtuChange',
    'disconnect',
    'rssiUpdate'
  ].forEach(name => bleno.on(name, defaultHandler(name)));
  return bleno;
};
