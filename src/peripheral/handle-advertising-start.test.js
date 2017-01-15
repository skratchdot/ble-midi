/* eslint-env jest */
jest.mock('../util/logger');

const handleAdvertisingStart = require('./handle-advertising-start').default;
let mockLog;

beforeEach(() => {
  jest.resetAllMocks();
  mockLog = require('../util/logger').default;
});

test('should handleAdvertisingStart success', () => {
  const bleno = jest.fn();
  bleno.setServices = jest.fn();
  handleAdvertisingStart(bleno, null);
  expect(mockLog.mock).toMatchSnapshot();
  expect(bleno.setServices.mock).toMatchSnapshot();
});

test('should handleAdvertisingStart error', () => {
  const bleno = jest.fn();
  handleAdvertisingStart(bleno, new Error('mock-error'));
  expect(mockLog.mock).toMatchSnapshot();
});
