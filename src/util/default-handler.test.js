/* eslint-env jest */
jest.mock('./logger');

let mockLog;
let defaultHandler;

beforeEach(() => {
  jest.resetAllMocks();
  mockLog = require('../util/logger').default;
  defaultHandler = require('./default-handler').default;
});

[
  ['mock-one', []],
  ['mock-two', [0, 42]],
  ['mock-three', [true, {}, 'cool']]
].forEach(testData => {
  const [name, args] = testData;
  test(
    `defaultHandler(${JSON.stringify(name)}, ${JSON.stringify(args)})`,
    () => {
      const fn = defaultHandler(name);
      fn(...args);
      expect(mockLog.mock.calls).toMatchSnapshot();
    }
  );
});
