// Challenge: Sum of Minimums! (7 kyu)

// Description:

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

// My code below:

const sumOfMinimums = (arr) => {
  // variable to hold total of minimum values
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    // Math.min() returns the lowest-valued number passed into it (see Math.min() on MDN)
    // Spread syntax (...) allows an iterable such as an array expression to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected (see spread syntax on MDN)
    total += Math.min(...arr[i]);
  }
  return total;
};

// Tests

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
); // 9
console.log(
  sumOfMinimums([
    [11, 12, 14, 54],
    [67, 89, 90, 56],
    [7, 9, 4, 3],
    [9, 8, 6, 7],
  ])
); // 76
