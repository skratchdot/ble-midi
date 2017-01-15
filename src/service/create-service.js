// @flow
import type Characteristic from 'bleno/lib/characteristic';
import { MIDI_SERVICE_UID } from '../constants';
import PrimaryService from 'bleno/lib/primary-service';

export default (characteristic: Characteristic) => {
  const service = new PrimaryService({
    uuid: MIDI_SERVICE_UID,
    characteristics: [characteristic]
  });
  return service;
};
