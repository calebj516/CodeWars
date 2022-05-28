// Challenge: What is between? (8 kyu)

// Description:

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// My code below:

function between(a, b) {
  // your code here
  let result = [];

  // determine the starting and ending numbers
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    result.push(i);
  }

  return result;
}

// Tests

console.log(between(1, 4)); // [1, 2, 3, 4]
console.log(between(-2, 2)); // [-2, -1, 0, 1, 2]
