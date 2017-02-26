// @flow
import type Argv from 'yargs';
import { DEFAULT_SERVICE_NAME } from '../../constants';
import createPeripheral from '../../peripheral/create-peripheral';
import error from '../../util/error';
import exit from '../../util/exit';
import getIncomingPacketHandler from '../../midi/get-incoming-packet-handler';

export const command = 'peripheral';
export const desc = 'Start advertising as a Bluetooth Peripheral';

export const builder = (yargs: Argv) =>
  yargs.usage(`Usage: $0 ${command}`).option('n', {
    alias: 'name',
    default: DEFAULT_SERVICE_NAME,
    describe: 'The service name to advertise',
    type: 'string'
  }).option('o', {
    alias: 'midi-out',
    describe: 'The midi out device number',
    requiresArg: true,
    type: 'number'
  });

export const handler = (argv: Object) => {
  getIncomingPacketHandler(argv.midiOut)
    .then((onIncomingPacket) => {
      createPeripheral(argv.name, onIncomingPacket);
    })
    .catch((err) => {
      error(err.message);
      exit(1);
    });
};
