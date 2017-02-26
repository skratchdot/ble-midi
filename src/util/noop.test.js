/* eslint-env jest */
test('noop()', () => {
  const noop = require('./noop').default;
  expect(noop()).toBeUndefined();
});
