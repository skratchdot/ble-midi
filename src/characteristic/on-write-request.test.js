/* eslint-env jest */
jest.mock('bleno/lib/characteristic');
jest.mock('../util/logger');
jest.mock('../packets/parse-packet');
jest.mock('../util/print-buffer');

const onWriteRequest = require('./on-write-request').default;
let mockLog;
let mockParsePacket;

beforeEach(() => {
  jest.resetAllMocks();
  mockLog = require('../util/logger').default;
  mockParsePacket = require('../packets/parse-packet').default;
});

test('should onWriteRequest(validData, 0, true, callback)', () => {
  const data = new Buffer([1, 2, 3, 4, 5]);
  const offset = 0;
  const withoutResponse = true;
  const callback = jest.fn();
  onWriteRequest(data, offset, withoutResponse, callback);
  expect(mockLog.mock).toMatchSnapshot();
  expect(mockLog.mock.calls.length).toEqual(2);
  expect(mockLog.mock.calls[0].length).toEqual(2);
  expect(callback.mock).toMatchSnapshot();
  expect(callback.mock.calls.length).toEqual(0);
  expect(mockParsePacket.mock).toMatchSnapshot();
});

test('should RESULT_UNLIKELY_ERROR onWriteRequest withoutResponse', () => {
  const data = new Buffer([1, 2, 3, 4, 5]);
  const callback = jest.fn();
  onWriteRequest(data, 0, false, callback);
  expect(mockLog.mock).toMatchSnapshot();
  expect(callback.mock).toMatchSnapshot();
  expect(callback.mock.calls.length).toEqual(1);
});

test('should RESULT_UNLIKELY_ERROR onWriteRequest with invalid offset', () => {
  const data = new Buffer([1, 2, 3, 4, 5]);
  const callback = jest.fn();
  onWriteRequest(data, 5, true, callback);
  expect(mockLog.mock).toMatchSnapshot();
  expect(callback.mock).toMatchSnapshot();
  expect(callback.mock.calls.length).toEqual(1);
});

test('should RESULT_UNLIKELY_ERROR onWriteRequest with invalid data', () => {
  const invalidData = new Buffer(0);
  const callback = jest.fn();
  onWriteRequest(invalidData, 0, true, callback);
  expect(mockLog.mock).toMatchSnapshot();
  expect(callback.mock).toMatchSnapshot();
  expect(callback.mock.calls.length).toEqual(1);
});
