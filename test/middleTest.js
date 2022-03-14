const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

let xyz = [11, 12, 13, 14, 15, 16, 17, 18];
middle(xyz);
assertArraysEqual(xyz, [11, 12, 13, 14, 15, 16, 17, 18]);
