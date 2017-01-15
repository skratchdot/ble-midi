/* eslint-env jest */

jest.mock('bleno/lib/primary-service');

test('createService(characteristic)', () => {
  const mockPrimaryService = require('bleno/lib/primary-service');
  const characteristic = jest.fn();
  const createService = require('./create-service').default;
  const service = createService(characteristic);
  expect(mockPrimaryService.mock).toMatchSnapshot();
  expect(mockPrimaryService.mock.calls.length).toEqual(1);
  const firstCall = mockPrimaryService.mock.calls[0];
  expect(firstCall[0].uuid).toEqual('03B80E5A-EDE8-4B33-A751-6CE34EC4C700');
  expect(firstCall[0].characteristics.length).toEqual(1);
  expect(firstCall[0].characteristics[0]).toEqual(characteristic);
  expect(characteristic.mock).toMatchSnapshot();
  expect(service).toMatchSnapshot();
});
