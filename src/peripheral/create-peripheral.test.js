/* eslint-env jest */
jest.mock('bleno/lib/bleno', () => {
  const bleno = jest.fn();
  bleno.on = jest.fn();
  bleno.__mockBleno__ = true;
  return () => bleno;
});

let createPeripheral;
let mockBleno;

beforeEach(() => {
  jest.resetAllMocks();
  const Bleno = require('bleno/lib/bleno');
  mockBleno = new Bleno();
  createPeripheral = require('./create-peripheral').default;
});

test('should createPeripheral(name)', () => {
  const name = jest.fn();
  const peripheral = createPeripheral(name);
  expect(mockBleno.mock).toMatchSnapshot();
  expect(mockBleno.on.mock).toMatchSnapshot();
  expect(peripheral.__mockBleno__).toEqual(true);
});

test('should createPeripheral with default name', () => {
  const peripheral = createPeripheral();
  expect(mockBleno.mock).toMatchSnapshot();
  expect(mockBleno.on.mock).toMatchSnapshot();
  expect(peripheral.__mockBleno__).toEqual(true);
});
