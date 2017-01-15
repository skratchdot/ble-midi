/* eslint-env jest */

test('should createCentral()', () => {
  const createCentral = require('./create-central').default;
  const central = createCentral();
  expect(central).toMatchSnapshot();
});
