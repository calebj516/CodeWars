// Challenge: Calculate Average (8 kyu)

// Description:

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My code below:

const findAverage = (array) => array.length > 0 ? array.reduce((total, current) => total + current, 0) / array.length : 0;

// Tests

console.log(findAverage([1, 1, 1])); // 1
console.log(findAverage([1, 2, 3])); // 2
console.log(findAverage([1, 2, 3, 4])); // 2.5