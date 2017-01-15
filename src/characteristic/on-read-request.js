// @flow
import Characteristic from 'bleno/lib/characteristic';
import log from '../util/logger';
const { RESULT_SUCCESS } = Characteristic;

export default (offset: number, callback: Function) => {
  log('onReadRequest', offset);
  callback(RESULT_SUCCESS, new Buffer(0));
};
