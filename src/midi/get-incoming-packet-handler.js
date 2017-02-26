import type Info from '../packets/info';
import type Message from '../packets/message';
import MessageMidi from '../packets/message-midi';
import midi from 'midi';
import noop from '../util/noop';

export default (midiOut: ?number) => new Promise((resolve, reject) => {
  if (typeof midiOut !== 'number') {
    return resolve(noop);
  } else {
    const output = new midi.output();
    const portCount = output.getPortCount();
    if (midiOut > portCount || midiOut < 0) {
      return reject(new Error('Invalid midi out device number.'));
    }
    output.openPort(midiOut);
    const onIncomingPacket = (info: Info) => {
      info.events.forEach((message: Message) => {
        if (message instanceof MessageMidi) {
          output.sendMessage([message.midiStatus, message.midiOne, message.midiTwo]);
        }
      });
    };
    return resolve(onIncomingPacket);
  }
});
