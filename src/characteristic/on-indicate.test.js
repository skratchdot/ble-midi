/* eslint-env jest */
jest.mock('../util/logger');

test('should onIndicate()', () => {
  const mockLog = require('../util/logger').default;
  const onIndicate = require('./on-indicate').default;
  onIndicate();
  expect(mockLog.mock).toMatchSnapshot();
  expect(mockLog.mock.calls.length).toEqual(1);
  expect(mockLog.mock.calls[0].length).toEqual(1);
});
