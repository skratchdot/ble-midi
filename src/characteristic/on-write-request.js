// @flow
import Characteristic from 'bleno/lib/characteristic';
import log from '../util/logger';
import parsePacket from '../packets/parse-packet';
import printBuffer from '../util/print-buffer';
const { RESULT_UNLIKELY_ERROR } = Characteristic;

export default (
  onIncomingPacket: Function,
  data: Buffer,
  offset: number,
  withoutResponse: boolean,
  callback: Function
) => {
  log(
    `onWriteRequest:
             data: ${data.toString('hex')}
${`\n${printBuffer(data)}`.replace(/\n/gi, '\n                   ')}
      data.length: ${data.length}
           offset: ${offset}
  withoutResponse: ${String(withoutResponse)}
  `
  );
  if (!withoutResponse || offset !== 0 || data.length === 0) {
    callback(RESULT_UNLIKELY_ERROR);
  }
  if (offset === 0 && data.length > 0) {
    const info = parsePacket(data);
    log('parsedPacket', info);
    onIncomingPacket(info);
  }
};
