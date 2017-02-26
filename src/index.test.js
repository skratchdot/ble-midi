/* eslint-env jest */

jest.mock('./peripheral/create-peripheral', () => jest.fn());
jest.mock('./midi/list-devices', () => jest.fn());

test('main lib exports some functions', () => {
  const lib = require('./index');
  expect(lib).toMatchSnapshot();
});
