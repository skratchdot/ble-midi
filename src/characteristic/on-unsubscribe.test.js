/* eslint-env jest */
jest.mock('../util/logger');

test('should onUnsubscribe()', () => {
  const mockLog = require('../util/logger').default;
  const onUnsubscribe = require('./on-unsubscribe').default;
  onUnsubscribe();
  expect(mockLog.mock).toMatchSnapshot();
  expect(mockLog.mock.calls.length).toEqual(1);
  expect(mockLog.mock.calls[0].length).toEqual(1);
});
