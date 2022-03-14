const assertArraysEqual = require('./assertArraysEqual');

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
  }
  return midArr;
};

// middle([1])
// middle([1, 2])
// middle([1, 2, 3])
// middle([1, 2, 3, 4, 5])
// middle([1, 2, 3, 4])
// middle([1, 2, 3, 4, 5, 6])


module.exports = middle;