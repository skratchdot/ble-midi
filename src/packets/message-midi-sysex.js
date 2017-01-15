// @flow
import Message from './message';

export default class MessageMidiSysex extends Message {
  isStart: boolean;
  isEnd: boolean;
  data: Buffer;
  constructor(isStart: boolean, isEnd: boolean, data: Buffer) {
    super('sysex');
    this.isStart = isStart;
    this.isEnd = isEnd;
    this.data = data;
  }
}
