// @flow
import log from './logger';

export default (name: string) =>
  (...args: Array<any>) => log(`${name}: ${JSON.stringify(args)}`);
