/* eslint-env jest */
import getTimestamp from './get-timestamp';

test('getTimestamp(high, low)', () => {
  for (let i = 0; i < 32; i++) {
    for (let j = 0; j < 64; j++) {
      expect(getTimestamp(i, j)).toMatchSnapshot();
    }
  }
});
