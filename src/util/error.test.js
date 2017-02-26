/* eslint-env jest */
/* eslint no-console: 0 */
test('error(...args)', () => {
  const consoleError = console.error;
  console.error = jest.fn();
  const error = require('./error').default;
  error();
  error(new Error('MOCK_ERROR_MSG_1'));
  error('MOCK_ERROR_MSG_2');
  error('MOCK_ERROR_MSG_3', 'MOCK_ERROR_MSG_4');
  expect(console.error.mock).toMatchSnapshot();
  console.error = consoleError;
});
