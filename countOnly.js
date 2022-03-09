const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// count only function

const countOnly = function (allItems, itemsToCount) {
  const results = {}; // empty object to capture result

  for (const item of allItems) { // for.. of loop to iterate through all items
    if (itemsToCount[item]) { //condition to check whether item is to count or not
    if (results[item]) { //if found in result
      results[item] += 1; //add 1 if found more than once
    } else {
      results[item] = 1; // enter 1 if found only once
    }
  }
}
return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);