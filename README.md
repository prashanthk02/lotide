# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install prashanthk02/lotide`

**Require it:**

`const _ = require('prashanthk02/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* [assertArraysEqual](/assertArraysEqual.js): checks whether provided two arrays are equal.

* [assertEqual](/assertEqual.js): checks whether provided two values are equal.
* [assertObjectsEqual](/assertObjectsEqual.js): checks whether provided two objects are equal.
* [countLetters](/countLetters.js): gives the count of each letter in a provided string.
* [countOnly](/countOnly.js): gives the count of element in a provided array.
* [eqArrays](/eqArrays.js): checks the equality of provided two arrays.
* [eqObjects](/eqObjects.js): checks the equality of provided two objects.
* [findKey](/findKey.js): finds the required key of the given object by given callback function.
* [findKeyByValue](/findKeyByValue.js): finds the respective key from the given object by given key value.
* [head](/head.js): returns the first element (head) of an array.
* [letterPositions](/letterPositions.js): gives an object with letter and thier index in a given string.
* [map](/map.js): takes an array and gives a new array as told to the call back function.
* [middle](/middle.js): takes an array, returns middle value as an array, if negative count returns middle one, if positive count returns middle two, if count is lessthan or equal to two returns empty array.
* [tail](/tail.js): takes an array, gives array excluding first element.
* [takeUntil](/takeUntil.js): takes an array and call back, gives the array as mentioned to call back.
* [without](/without.js): takes two arrays and gives only values of first array that are not in second array.