// Challenge: Find the smallest integer in the array (8 kyu)

// Description:

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// My code below:

// spread operator expands the array that is passed in via "args", and Math.min returns the smallest integer
findSmallestInt = (args) => Math.min(...args);

// Tests

console.log(findSmallestInt([78, 56, 232, 12, 8])); // 8
console.log(findSmallestInt([78, 56, 232, 12, 18])); // 12
console.log(findSmallestInt([78, 56, 232, 412, 228])); // 56
console.log(findSmallestInt([78, 56, 232, 12, 0])); // 0
console.log(findSmallestInt([1, 56, 232, 12, 8])); // 1
