/* eslint-env jest */
jest.mock('yargs');

test('handles help', () => {
  const lib = require('yargs');
  const cli = require('../index').default;
  cli([]);
  const mockYargs = lib.getMockYargs();
  expect(mockYargs.usage.mock).toMatchSnapshot();
  expect(mockYargs.commandDir.mock).toMatchSnapshot();
  expect(mockYargs.help.mock).toMatchSnapshot();
  expect(mockYargs.alias.mock).toMatchSnapshot();
  expect(mockYargs.version.mock).toMatchSnapshot();
  expect(mockYargs.demand.mock).toMatchSnapshot();
  expect(mockYargs.strict.mock).toMatchSnapshot();
});
