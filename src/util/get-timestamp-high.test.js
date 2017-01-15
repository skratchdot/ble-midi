/* eslint-env jest */
import getTimestampHigh from './get-timestamp-high';

test('getTimestampHigh(byte)', () => {
  for (let i = -300; i < 300; i++) {
    expect(getTimestampHigh(i)).toMatchSnapshot();
  }
});
