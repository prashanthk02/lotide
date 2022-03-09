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

//letter positions function
const letterPositions = function(sentence) {
  const letterIndex = {};
  for (let x = 0; x < sentence.length; x++) { //looping thru sentence
    const letter = sentence[x] 
    if (x !== ' ') { //to avoid space
      if (Array.isArray(letterIndex[letter])) { //to check array
        letterIndex[letter].push(x); //push into existing array
      } else {
        letterIndex[letter] = [x]; //create a new array
      }
    }
  }
  return letterIndex;
};

console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").e, [1]);