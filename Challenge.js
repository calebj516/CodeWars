// Challenge: Sum of differences in array (8 kyu)

// Description:

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).

// My code below:

// Mathematical shortcut to solve this problem is to take the largest number and subtract it from the smallest number. This is reflected in my solution with the Math.max and Math.min methods.

const sumOfDifferences = (arr) =>
  arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

// Tests

console.log(sumOfDifferences([1, 2, 10])); // 9
console.log(sumOfDifferences([-3, -2, -1])); // 2
console.log(sumOfDifferences([1, 1, 1, 1, 1])); // 0
console.log(sumOfDifferences([-17, 17])); // 34
console.log(sumOfDifferences([])); // 0
