/* eslint-env jest */
jest.mock('yargs');
jest.mock('../../../peripheral/create-peripheral', () => jest.fn());

let mockCreatePeripheral;

beforeEach(() => {
  jest.resetAllMocks();
  mockCreatePeripheral = require('../../../peripheral/create-peripheral');
});

test('builder(yargs)', () => {
  const mockYargs = require('yargs')();
  const builder = require('../peripheral').builder;
  const result = builder(mockYargs);
  expect(result).toEqual(mockYargs);
  expect(mockYargs.usage.mock).toMatchSnapshot();
  expect(mockYargs.option.mock).toMatchSnapshot();
});

test('handler(argv)', () => {
  const handler = require('../peripheral').handler;
  handler({
    name: 'MOCK_NAME'
  });
  expect(mockCreatePeripheral.mock).toMatchSnapshot();
  expect(mockCreatePeripheral.mock.calls.length).toEqual(1);
  expect(mockCreatePeripheral.mock.calls[0].length).toEqual(1);
});
