/* eslint-env jest */
jest.mock('bleno/lib/characteristic');
jest.mock('../util/logger');

test('should onReadRequest(offset, callback)', () => {
  const mockLog = require('../util/logger').default;
  const onReadRequest = require('./on-read-request').default;
  const offset = jest.fn();
  const callback = jest.fn();
  onReadRequest(offset, callback);
  expect(mockLog.mock).toMatchSnapshot();
  expect(mockLog.mock.calls.length).toEqual(1);
  expect(mockLog.mock.calls[0].length).toEqual(2);
  expect(callback.mock).toMatchSnapshot();
  expect(callback.mock.calls.length).toEqual(1);
  expect(callback.mock.calls[0].length).toEqual(2);
});
