/* eslint-env jest */

test('constants', () => {
  const lib = require('./index');
  expect(lib).toMatchSnapshot();
});
