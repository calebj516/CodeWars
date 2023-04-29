// Challenge: Flatten and sort an array (7 kyu)

// Description:

// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

// My code below:

const flattenAndSort = (array) => [].concat(...array).sort((a, b) => a - b);

// Tests

console.log(flattenAndSort([[9, 7, 5, 3, 1], [8, 6, 4, 2, 0], [], [1]])); // [0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenAndSort([[1], [], [1], [], [], [-1, -2, -1], [0, 3], [1], [2]])); // [-2, -1, -1, 0, 1, 1, 1, 2, 3]
console.log(flattenAndSort([[], [], [64], [], [504, 503], [4096], [], [303], [202], [2500], [], [100]])); // [64, 100, 202, 303, 503, 504, 2500, 4096]
console.log(flattenAndSort([[90, 81, 72], [63, 54, 35], [], [46], [27, 18, 0]])); // [0, 18, 27, 35, 46, 54, 63, 72, 81, 90]
console.log(flattenAndSort([[1], [], [1], [1], [0], [-1], [], [0], [-1], [0], [-1]])); // [-1, -1, -1, 0, 0, 0, 1, 1, 1]
console.log(flattenAndSort([[-9, -8, -7, -6, -5, -4, -3, -2, -1]])); // [-9, -8, -7, -6, -5, -4, -3, -2, -1]
console.log(flattenAndSort([[9, 8, 7, 6, 5, 4, 3, 2, 1]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
