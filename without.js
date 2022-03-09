const eqArrays = function (arr1, arr2) {
  if(arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
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
