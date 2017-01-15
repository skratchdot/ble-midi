// @flow
import log from '../util/logger';

export default (name: string) =>
  (...args: Array<any>) => log(`${name}: ${JSON.stringify(args)}`);
