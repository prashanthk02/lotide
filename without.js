const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(arr1, arr2) {
  let newArr = [];
  for (const element of arr1) {
    if (!arr2.includes(element)) {
      newArr.push(element);
    }
  }
  console.log(newArr);
}

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
without([1], [1]);
without(["A", "B", "C"], [1, 2, "C"]);

assertArraysEqual([1], [1]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;
