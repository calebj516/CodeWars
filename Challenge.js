// Challenge: Squares sequence (7 kyu)

// Description:

// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples

// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

// My code below:

function squares(x, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(x);
    x *= x;
  }

  return result;
}

// Tests

console.log(squares(2, 5)); // [2, 4, 16, 256, 65536]
console.log(squares(3, 3)); // [3, 9, 81]
console.log(squares(5, 3)); // [5, 25, 625]
console.log(squares(10, 4)); // [10, 100, 10000, 100000000]
