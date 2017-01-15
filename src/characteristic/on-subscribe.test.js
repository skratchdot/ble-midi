/* eslint-env jest */
jest.mock('../util/logger');

test('should onSubscribe(maxValueSize, updateValueCallback)', () => {
  const mockLog = require('../util/logger').default;
  const onSubscribe = require('./on-subscribe').default;
  const maxValueSize = jest.fn();
  const updateValueCallback = jest.fn();
  onSubscribe(maxValueSize, updateValueCallback);
  expect(mockLog.mock).toMatchSnapshot();
  expect(mockLog.mock.calls.length).toEqual(1);
  expect(mockLog.mock.calls[0].length).toEqual(3);
  expect(mockLog.mock.calls[0][1]).toEqual(maxValueSize);
  expect(mockLog.mock.calls[0][2]).toEqual(updateValueCallback);
});
