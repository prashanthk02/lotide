const assertEqual = require('./assertEqual');

// count letters function
const countLetters = function(str) {
  let solution = {}; // empty obj to get desired solution as obj
  for (const letter of str) {
    if (letter !== ' ') { // avoiding space to count
      if (solution[letter]) {
        solution[letter] += 1;
      } else {
        solution[letter] = 1;
      }
    }
  }
  return solution; // use return here for assertEqual fun to pass
};

console.log(countLetters('hello hello'));
console.log(countLetters('LHL'));
console.log(countLetters('light house labs'));

let output = countLetters('LHL');
assertEqual(output["L"], 2);

module.exports = countLetters;