/* eslint-env jest */

test('constants', () => {
  const constants = require('./constants');
  expect(constants).toMatchSnapshot();
});
