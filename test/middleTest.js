const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// let xyz = [11, 12, 13, 14, 15, 16, 17, 18];
// middle(xyz);
// assertArraysEqual(xyz, [11, 12, 13, 14, 15, 16, 17, 18]);
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns 6, 7 for [5, 6, 7, 8]", () => {
    assert.deepEqual(middle([5, 6, 7, 8]), [ 6, 7 ]);
   });

  it("returns Lighthouse for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });

  it("returns 1 for length ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]).length, 1);
  });

});