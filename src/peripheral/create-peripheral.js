// @flow
import Bleno from 'bleno/lib/bleno';
import { DEFAULT_SERVICE_NAME } from '../constants';
import defaultHandler from './default-handler';
import handleAdvertisingStart from './handle-advertising-start';
import handleStateChange from './handle-state-change';

export default (name: string = DEFAULT_SERVICE_NAME) => {
  const bleno = new Bleno();
  bleno.on('stateChange', handleStateChange.bind(bleno, bleno, name));
  bleno.on('advertisingStart', handleAdvertisingStart.bind(bleno, bleno));
  [
    'platform',
    'addressChange',
    'advertisingStop',
    'servicesSet',
    'accept',
    'mtuChange',
    'disconnect'
  ].forEach(name => bleno.on(name, defaultHandler(name)));
  return bleno;
};
