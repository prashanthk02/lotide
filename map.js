const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//map function
const words = ["ground", "control", "to", "major", "tom"];
const num = ["0", "1", "2"];
const nums = [1, 2, 3];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
// console.log(results1);

const results2 = map(num, x => x + 1);
// console.log(results2);

const results3 = map(nums, y => y + 1);
// console.log(results3);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); //pass
assertArraysEqual(results2, [ '01', '11', '21' ]); //pass
assertArraysEqual(results3, [1, 2, 3]); //fail
