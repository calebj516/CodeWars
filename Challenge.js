// Challenge: Largest Elements (7 kyu)

// Description:

// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])

// => [6,7]

// My code below:

const largest = (n, array) => n ? [...array].sort((a, b) => a - b).slice(-n) : [];

// Tests

console.log(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]); // [9, 10]
console.log(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]); // []
console.log(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]); // [-1, 0]
