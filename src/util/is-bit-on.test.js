/* eslint-env jest */
import isBitOn from './is-bit-on';

test('isBitOn(byte, num)', () => {
  const byte = parseInt('01101010', 2);
  expect(isBitOn(byte, 0)).toEqual(false);
  expect(isBitOn(byte, 1)).toEqual(true);
  expect(isBitOn(byte, 2)).toEqual(false);
  expect(isBitOn(byte, 3)).toEqual(true);
  expect(isBitOn(byte, 4)).toEqual(false);
  expect(isBitOn(byte, 5)).toEqual(true);
  expect(isBitOn(byte, 6)).toEqual(true);
  expect(isBitOn(byte, 7)).toEqual(false);
});
