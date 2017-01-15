/* eslint-env jest */
import fs from 'fs';
import parsePacket from './parse-packet';
import path from 'path';

const testfixtures = `${__dirname}/__testfixtures__/parse-packet/`;
const filenames = fs.readdirSync(testfixtures, 'utf-8');

filenames.forEach(filename => {
  const parsed = path.parse(filename);
  const values = fs
    .readFileSync(`${testfixtures}/${filename}`, 'utf-8')
    .trim()
    .split('\n')
    .map(v => parseInt(v, 2));
  const buffer = new Buffer(values);
  test(`should parsePacket(packet) with ${parsed.name}`, () => {
    const info = parsePacket(buffer);
    expect(info).toMatchSnapshot();
  });
});
