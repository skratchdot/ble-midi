// @flow
import Message from './message';

export default class MessageUnknown extends Message {
  skipIndex: number;
  skipData: Buffer;
  constructor(skipIndex: number, skipData: Buffer) {
    super('unknown');
    this.skipIndex = skipIndex;
    this.skipData = skipData;
  }
}
