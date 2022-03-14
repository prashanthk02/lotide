const assertEqual = require('./assertEqual');

//find key function
const findKey = function(object, cb) {
  for (let key in object) {
    if (cb(object[key])) {
      return key;
    }
  }
};

const k = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const j = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4);

assertEqual(k, "noma"); // noma
assertEqual(j, "Blue Hill"); //undefined

module.exports = findKey;