// Challenge: No oddities here (7 kyu)

// Description:

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// My code below:

const noOdds = values => values.filter(num => !(num % 2));

// Tests

console.log(noOdds([0,1])); // [0]
console.log(noOdds([0,1,2,3])); // [0,2]
