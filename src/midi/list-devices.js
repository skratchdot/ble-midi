// @flow
import log from '../util/logger';
import midi from 'midi';

export default (types: Array<string> = ['input', 'output']) => {
  types = types.filter(t => t === 'input' || t === 'output');
  types.forEach(type => {
    log(`\nAvailable Devices (${type}):`);
    const midiType = new midi[type]();
    const portCount = midiType.getPortCount();
    for (let i = 0; i < portCount; i++) {
      log(`${i}: ${midiType.getPortName(i)}`);
    }
    midiType.openVirtualPort(`dummy-port-${type}`);
    midiType.closePort();
  });
};
