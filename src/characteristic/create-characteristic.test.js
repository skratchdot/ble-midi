/* eslint-env jest */
jest.mock('bleno/lib/characteristic');

test('should createCharacteristic()', () => {
  const mockCharacteristic = require('bleno/lib/characteristic');
  const createCharacteristic = require('./create-characteristic').default;
  const characteristic = createCharacteristic();
  expect(mockCharacteristic.mock.calls).toMatchSnapshot();
  expect(characteristic).toBeInstanceOf(mockCharacteristic);
});
