// @flow
import type Argv from 'yargs';
import listDevices from '../../midi/list-devices';

export const command = 'list-devices';
export const desc = 'List available MIDI devices';

export const builder = (yargs: Argv) => yargs.usage(`Usage: $0 ${command}`);

export const handler = () => {
  listDevices();
};
