const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = letterPositions;