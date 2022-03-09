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

// middle.js function
const middle = function(arr) {
  
  const len = arr.length
  const midIndex = Math.floor(len / 2);
  let midArr = [];
  
  if(len <= 2) {
    midArr;
  } else if(len > 2 && len % 2 === 1) {
    midArr.push(arr[midIndex])
  } else if(len > 2 && len % 2 === 0) {
    midArr.push(arr[midIndex - 1])
    midArr.push(arr[midIndex])
    midArr
  }
 console.log(midArr)
};

middle([1])
middle([1, 2])
middle([1, 2, 3])
middle([1, 2, 3, 4, 5])
middle([1, 2, 3, 4])
middle([1, 2, 3, 4, 5, 6])

let xyz = [11, 12, 13, 14, 15, 16, 17, 18];
middle(xyz);
assertArraysEqual(xyz, [11, 12, 13, 14, 15, 16, 17, 18]);
