/* eslint-env jest */
import getTimestampLow from './get-timestamp-low';

test('getTimestampLow(byte)', () => {
  for (let i = -300; i < 300; i++) {
    expect(getTimestampLow(i)).toMatchSnapshot();
  }
});
