// @flow
export default (high: number, low: number) => {
  return parseInt(
    [
      (high & 32) >> 5,
      (high & 16) >> 4,
      (high & 8) >> 3,
      (high & 4) >> 2,
      (high & 2) >> 1,
      (high & 1) >> 0,
      (low & 64) >> 6,
      (low & 32) >> 5,
      (low & 16) >> 4,
      (low & 8) >> 3,
      (low & 4) >> 2,
      (low & 2) >> 1,
      (low & 1) >> 0
    ].join(''),
    2
  );
};
