/* eslint-env jest */
jest.mock('../util/logger');

test('should onNotify()', () => {
  const mockLog = require('../util/logger').default;
  const onNotify = require('./on-notify').default;
  onNotify();
  expect(mockLog.mock).toMatchSnapshot();
  expect(mockLog.mock.calls.length).toEqual(1);
  expect(mockLog.mock.calls[0].length).toEqual(1);
});
