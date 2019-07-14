import isInteger from '../src/is-integer-x';

describe('isInteger', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof isInteger).toBe('function');
  });

  it('should return true', function() {
    expect.assertions(4);
    expect(isInteger(0)).toBe(true);
    expect(isInteger(-0)).toBe(true);
    expect(isInteger(1)).toBe(true);
    expect(isInteger(-100000)).toBe(true);
  });

  it('should return false', function() {
    expect.assertions(10);
    expect(isInteger(0.1)).toBe(false);
    expect(isInteger(-0.1)).toBe(false);
    expect(isInteger(Math.PI)).toBe(false);
    expect(isInteger(NaN)).toBe(false);
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger(-Infinity)).toBe(false);
    expect(isInteger('10')).toBe(false);
    expect(isInteger(true)).toBe(false);
    expect(isInteger(false)).toBe(false);
    expect(isInteger([1])).toBe(false);
  });
});
