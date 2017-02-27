/* eslint-env jest */
import MessageMidi from '../packets/message-midi';
jest.mock('../util/noop');
jest.mock('midi', () => {
  const midi = jest.fn();
  midi.getPortCount = () => 2;
  midi.getPortName = portNum => `MOCK_DEVICE_${portNum}`;
  midi.openVirtualPort = jest.fn();
  midi.openPort = jest.fn();
  midi.closePort = jest.fn();
  midi.sendMessage = jest.fn();
  midi.__mockBleno__ = true;
  return {
    input: () => midi,
    output: () => midi
  };
});

let mockNoop;
let mockMidi;
let getIncomingPacketHandler;

beforeEach(() => {
  jest.resetAllMocks();
  mockNoop = require('../util/noop').default;
  mockMidi = require('midi');
  getIncomingPacketHandler = require('./get-incoming-packet-handler').default;
});

test('getIncomingPacketHandler()', () => {
  return getIncomingPacketHandler().then(onIncomingPacket => {
    expect(onIncomingPacket).toEqual(mockNoop);
  });
});

test('getIncomingPacketHandler(5)', () => {
  return getIncomingPacketHandler(5).catch(err => {
    expect(err).toBeInstanceOf(Error);
    expect(err.message).toEqual('Invalid midi out device number.');
  });
});

test('getIncomingPacketHandler(-1)', () => {
  return getIncomingPacketHandler(-1).catch(err => {
    expect(err).toBeInstanceOf(Error);
    expect(err.message).toEqual('Invalid midi out device number.');
  });
});

test('getIncomingPacketHandler(2)', () => {
  const mockOutput = mockMidi.output();
  return getIncomingPacketHandler(2).then(onIncomingPacket => {
    const info = {
      events: [
        new MessageMidi(
          'mock-message-1',
          'mock-time-1',
          'mock-status-1',
          'mock-one-1',
          'mock-two-1'
        ),
        'invalid event 1',
        new MessageMidi(
          'mock-message-2',
          'mock-time-2',
          'mock-status-2',
          'mock-one-2',
          'mock-two-2'
        ),
        'invalid event 2'
      ]
    };
    onIncomingPacket(info);
    expect(onIncomingPacket).not.toEqual(mockNoop);
    expect(mockOutput.openPort.mock).toMatchSnapshot();
    expect(mockOutput.sendMessage.mock).toMatchSnapshot();
  });
});
