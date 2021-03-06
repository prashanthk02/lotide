const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

//eqObjects function
const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if(keys1.length !== keys2.length) {
    return false; //compare object keys length as an array
  } 
  for (let key of keys1) {
    if (Array.isArray(object1[key])){
      if(!eqArrays(object1[key], object2[key])) {
        return false;
      } 
    } else {
      if (object1[key] !== object2[key]) {
        return false;
        }
      }
    }
    return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));

module.exports = eqObjects;