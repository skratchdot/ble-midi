// @flow
export default (buffer: Buffer) => {
  const output = [];
  for (let i = 0; i < buffer.length; i++) {
    const val = buffer[i].toString(2);
    const bits = `00000000${val}`.substr(-8);
    output.push(bits);
  }
  return output.join('\n');
};
