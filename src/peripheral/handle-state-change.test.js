/* eslint-env jest */
jest.mock('../util/logger');

let handleStateChange;
let mockLog;

beforeEach(() => {
  jest.resetAllMocks();
  mockLog = require('../util/logger').default;
  handleStateChange = require('./handle-state-change').default;
});

test('should handleStateChange when poweredOn', () => {
  const bleno = jest.fn();
  bleno.startAdvertising = jest.fn();
  handleStateChange(bleno, 'mock-name', 'poweredOn');
  expect(bleno.mock).toMatchSnapshot();
  expect(bleno.startAdvertising.mock).toMatchSnapshot();
  expect(mockLog.mock.calls).toMatchSnapshot();
});

test('should handleStateChange when not poweredOn', () => {
  const bleno = jest.fn();
  bleno.stopAdvertising = jest.fn();
  handleStateChange(bleno, 'mock-name', 'mock-state');
  expect(bleno.mock).toMatchSnapshot();
  expect(bleno.stopAdvertising.mock).toMatchSnapshot();
  expect(mockLog.mock.calls).toMatchSnapshot();
});
