/* eslint-env jest */

let __mockYargs__ = null;

const lib = () => {
  const mockYargs = jest.fn();
  mockYargs.usage = jest.fn().mockReturnValue(mockYargs);
  mockYargs.commandDir = jest.fn().mockReturnValue(mockYargs);
  mockYargs.help = jest.fn().mockReturnValue(mockYargs);
  mockYargs.alias = jest.fn().mockReturnValue(mockYargs);
  mockYargs.version = jest.fn().mockReturnValue(mockYargs);
  mockYargs.demand = jest.fn().mockReturnValue(mockYargs);
  mockYargs.strict = jest.fn().mockReturnValue(mockYargs);
  mockYargs.parse = jest.fn().mockReturnValue(mockYargs);
  mockYargs.option = jest.fn().mockReturnValue(mockYargs);
  __mockYargs__ = mockYargs;
  return mockYargs;
};

lib.getMockYargs = () => __mockYargs__;

module.exports = lib;
