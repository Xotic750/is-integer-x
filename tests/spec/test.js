'use strict';

var isInteger;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  isInteger = require('../../index.js');
} else {
  isInteger = returnExports;
}

describe('isInteger', function () {
  it('is a function', function () {
    expect(typeof isInteger).toBe('function');
  });

  it('should return true', function () {
    isInteger(0);
    isInteger(-0);
    isInteger(1);
    isInteger(-100000);
  });

  it('should return false', function () {
    isInteger(0.1);
    isInteger(-0.1);
    isInteger(Math.PI);
    isInteger(NaN);
    isInteger(Infinity);
    isInteger(-Infinity);
    isInteger('10');
    isInteger(true);
    isInteger(false);
    isInteger([1]);
  });
});
