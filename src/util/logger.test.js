/* eslint-env jest */
/* eslint no-console: 0 */
test('log(...args)', () => {
  const consoleLog = console.log;
  console.log = jest.fn();
  const log = require('./logger').default;
  log();
  log('hi');
  log('hi', 'everybody');
  expect(console.log.mock).toMatchSnapshot();
  console.log = consoleLog;
});
