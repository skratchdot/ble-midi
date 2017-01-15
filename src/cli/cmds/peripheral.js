// @flow
import type Argv from 'yargs';
import { DEFAULT_SERVICE_NAME } from '../../constants';
import createPeripheral from '../../peripheral/create-peripheral';

export const command = 'peripheral';
export const desc = 'Start advertising as a Bluetooth Peripheral';

export const builder = (yargs: Argv) =>
  yargs.usage(`Usage: $0 ${command}`).option('n', {
    alias: 'name',
    default: DEFAULT_SERVICE_NAME,
    describe: 'The service name to advertise',
    type: 'string'
  });

export const handler = (argv: Object) => {
  createPeripheral(argv.name);
};
