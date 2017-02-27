/* eslint-env jest */
jest.mock('../characteristic/create-characteristic');
jest.mock('../service/create-service');
jest.mock('../util/logger');

let mockCreateCharacteristic;
let mockCreateService;
let mockLog;
let mockBleno;
let mockOnIncomingPacket;
let handleAdvertisingStart;

beforeEach(() => {
  jest.resetAllMocks();
  mockCreateCharacteristic = require(
    '../characteristic/create-characteristic'
  ).default;
  mockCreateService = require('../service/create-service').default;
  mockLog = require('../util/logger').default;
  mockBleno = jest.fn();
  mockBleno.setServices = jest.fn();
  mockOnIncomingPacket = jest.fn();
  handleAdvertisingStart = require('./handle-advertising-start').default;
});

test('should handleAdvertisingStart success', () => {
  handleAdvertisingStart(mockBleno, mockOnIncomingPacket, null);
  expect(mockCreateCharacteristic.mock).toMatchSnapshot();
  expect(mockCreateService.mock).toMatchSnapshot();
  expect(mockLog.mock).toMatchSnapshot();
  expect(mockBleno.setServices.mock).toMatchSnapshot();
});

test('should handleAdvertisingStart error', () => {
  handleAdvertisingStart(
    mockBleno,
    mockOnIncomingPacket,
    new Error('mock-error')
  );
  expect(mockLog.mock).toMatchSnapshot();
  expect(mockCreateCharacteristic.mock).toMatchSnapshot();
  expect(mockCreateService.mock).toMatchSnapshot();
  expect(mockLog.mock).toMatchSnapshot();
  expect(mockBleno.setServices.mock).toMatchSnapshot();
});
