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