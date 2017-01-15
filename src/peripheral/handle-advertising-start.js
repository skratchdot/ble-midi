// @flow
import type Bleno from 'bleno/lib/bleno';
import createCharacteristic from '../characteristic/create-characteristic';
import createService from '../service/create-service';
import log from '../util/logger';

export default (bleno: Bleno, err: ?Error) => {
  log(`advertisingStart: ${err ? String(err) : 'success'}`);
  if (!err) {
    const characteristic = createCharacteristic();
    const service = createService(characteristic);
    bleno.setServices([service]);
  }
};
