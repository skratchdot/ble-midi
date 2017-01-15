// @flow
import { name, version } from '../../package.json';
import Argv from 'yargs';

export default (args: Array<any>) => {
  const program = new Argv()
    .usage('Usage: $0 <command> [options]')
    .commandDir('cmds')
    .help('help')
    .alias('h', 'help')
    .version(`${name} version ${version}`)
    .alias('v', 'version')
    .demand(1)
    .strict();
  program.parse(args);
};
