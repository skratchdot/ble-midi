/* eslint-env jest */
/* eslint no-console: 0 */
jest.mock('process');

test('exit(...args)', () => {
  const mockExit = jest.fn();
  const originalExit = process.exit;
  process.exit = mockExit;
  const exit = require('./exit').default;
  exit();
  exit(0);
  exit(1);
  expect(mockExit.mock.calls.length).toEqual(3);
  expect(mockExit.mock.calls[0][0]).toBeUndefined();
  expect(mockExit.mock.calls[1][0]).toEqual(0);
  expect(mockExit.mock.calls[2][0]).toEqual(1);
  process.exit = originalExit;
});
