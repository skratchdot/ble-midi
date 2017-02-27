/* eslint-env jest */
jest.mock('yargs');
jest.mock('../../../peripheral/create-peripheral', () => jest.fn());
jest.mock('../../../midi/get-incoming-packet-handler', () => jest.fn());
jest.mock('../../../util/error');
jest.mock('../../../util/exit');

let mockCreatePeripheral;
let mockGetIncomingPacketHandler;
let mockError;
let mockExit;

beforeEach(() => {
  jest.resetAllMocks();
  mockCreatePeripheral = require('../../../peripheral/create-peripheral');
  mockGetIncomingPacketHandler = require(
    '../../../midi/get-incoming-packet-handler'
  );
  mockError = require('../../../util/error').default;
  mockExit = require('../../../util/exit').default;
});

test('builder(yargs)', () => {
  const mockYargs = require('yargs')();
  const builder = require('../peripheral').builder;
  const result = builder(mockYargs);
  expect(result).toEqual(mockYargs);
  expect(mockYargs.usage.mock).toMatchSnapshot();
  expect(mockYargs.option.mock).toMatchSnapshot();
});

test('handler(argv) - no error', () => {
  const handler = require('../peripheral').handler;
  mockGetIncomingPacketHandler.mockReturnValue(
    Promise.resolve(mockCreatePeripheral)
  );
  handler({
    name: 'MOCK_NAME_1',
    midiOut: 'MOCK_MIDI_OUT_1'
  });
  expect(mockCreatePeripheral.mock).toMatchSnapshot();
  expect(mockGetIncomingPacketHandler.mock).toMatchSnapshot();
});

test('handler(argv) - error', () => {
  const handler = require('../peripheral').handler;
  mockGetIncomingPacketHandler.mockReturnValue(
    Promise.reject(new Error('MOCK_ERROR'))
  );
  handler({
    name: 'MOCK_NAME_2',
    midiOut: 'MOCK_MIDI_OUT_2'
  });
  expect(mockCreatePeripheral.mock).toMatchSnapshot();
  expect(mockGetIncomingPacketHandler.mock).toMatchSnapshot();
  expect(mockError.mock).toMatchSnapshot();
  expect(mockExit.mock).toMatchSnapshot();
});
