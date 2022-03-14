const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//take until
const fruits = ["apple", "banana", "orange", "berry"];

const takeUntil = function(array, callback) {
  let until = [];
  for (const e of array) {
    if (!callback(e)) {
      until.push(e);
    } else {
      return until;
    }
  }
};

const favFruits = takeUntil(fruits, fruit => fruit === "berry");
console.log(favFruits);

assertArraysEqual(favFruits, ["apple", "banana", "orange"]);

module.exports = takeUntil;