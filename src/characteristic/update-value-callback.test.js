/* eslint-env jest */
jest.mock('../util/logger');

test('should updateValueCallback()', () => {
  const mockLog = require('../util/logger').default;
  const updateValueCallback = require('./update-value-callback').default;
  updateValueCallback();
  expect(mockLog.mock).toMatchSnapshot();
  expect(mockLog.mock.calls.length).toEqual(1);
  expect(mockLog.mock.calls[0].length).toEqual(1);
});
