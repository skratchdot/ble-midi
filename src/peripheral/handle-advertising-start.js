// @flow
import type Bleno from 'bleno/lib/bleno';
import createCharacteristic from '../characteristic/create-characteristic';
import createService from '../service/create-service';
import log from '../util/logger';

export default (bleno: Bleno, onIncomingPacket: Function, err: ?Error) => {
  log(`advertisingStart: ${err ? String(err) : 'success'}`);
  if (!err) {
    const characteristic = createCharacteristic(onIncomingPacket);
    const service = createService(characteristic);
    bleno.setServices([service]);
  }
};
