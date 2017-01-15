// @flow
import type Bleno from 'bleno/lib/bleno';
import { MIDI_SERVICE_UID } from '../constants';
import log from '../util/logger';

export default (bleno: Bleno, name: string, state: string) => {
  log(`stateChange: ${state}`);
  if (state === 'poweredOn') {
    log(`Start Advertising Peripheral "${name}": ${MIDI_SERVICE_UID}`);
    bleno.startAdvertising(name, [MIDI_SERVICE_UID]);
  } else {
    log(`Stop advertising Peripheral "${name}": ${MIDI_SERVICE_UID}`);
    bleno.stopAdvertising();
  }
};
