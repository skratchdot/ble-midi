/* eslint-env jest */
jest.mock('yargs');
jest.mock('../../../midi/list-devices', () => jest.fn());

let mockListDevices;

beforeEach(() => {
  jest.resetAllMocks();
  mockListDevices = require('../../../midi/list-devices');
});

test('builder(yargs)', () => {
  const mockYargs = require('yargs')();
  const builder = require('../list-devices').builder;
  const result = builder(mockYargs);
  expect(result).toEqual(mockYargs);
  expect(mockYargs.usage.mock).toMatchSnapshot();
});

test('handler', () => {
  const handler = require('../list-devices').handler;
  handler();
  expect(mockListDevices.mock).toMatchSnapshot();
  expect(mockListDevices.mock.calls.length).toEqual(1);
  expect(mockListDevices.mock.calls[0].length).toEqual(0);
});
