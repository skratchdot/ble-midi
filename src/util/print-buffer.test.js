/* eslint-env jest */
import printBuffer from './print-buffer';

test('printBuffer(buffer)', () => {
  const buffer = new Buffer([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    0,
    1,
    126,
    127,
    128,
    129,
    130,
    253,
    254,
    255,
    256,
    257,
    258,
    259,
    260,
    261,
    262
  ]);
  expect(printBuffer(buffer)).toMatchSnapshot();
});
