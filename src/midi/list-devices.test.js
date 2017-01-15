/* eslint-env jest */
jest.mock('../util/logger');
jest.mock('midi', () => {
  const midi = jest.fn();
  midi.getPortCount = () => 2;
  midi.getPortName = portNum => `MOCK_DEVICE_${portNum}`;
  midi.openVirtualPort = () => {};
  midi.closePort = () => {};
  midi.__mockBleno__ = true;
  return {
    input: () => midi,
    output: () => midi
  };
});

let mockLog;
let mockMidi;
let listDevices;

beforeEach(() => {
  jest.resetAllMocks();
  mockLog = require('../util/logger').default;
  mockMidi = require('midi');
  listDevices = require('./list-devices').default;
});

[
  undefined,
  [],
  ['invalid'],
  ['input'],
  ['output'],
  ['output', 'input'],
  ['input', 'output'],
  ['input', 'invalid', 'output']
].forEach(types => {
  test(`listDevices(${JSON.stringify(types)})`, () => {
    listDevices(types);
    expect(mockLog.mock).toMatchSnapshot();
    expect(mockMidi.mock).toMatchSnapshot();
  });
});
