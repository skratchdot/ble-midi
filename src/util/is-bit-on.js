// @flow
export default (byte: number, num: number) => {
  return (byte & Math.pow(2, num)) > 0;
};
