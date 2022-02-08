// Challenge: Adding remainders to a list (7 kyu)

// Description:

// Your job is to implement a function which returns the last D digits of an integer N as a list.

// Special cases:

// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.

// Examples:
// N = 1
// D = 1
// result = [1]

// N = 1234
// D = 2
// result = [3, 4]

// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]

// My code below:

function lastDigit(n, d) {
  const len = n.toString().length;
  const nArr = n.toString().split("").map(Number);
  // include only the elements with an index that is greater than or equal to length - d
  return nArr.filter((num, idx) => idx >= len - d);
}

// Tests

console.log(lastDigit(1, 1)); // [1]
console.log(lastDigit(123767, 4)); // [3, 7, 6, 7]
console.log(lastDigit(0, 1)); // [0]
console.log(lastDigit(34625647867585, 10)); // [5, 6, 4, 7, 8, 6, 7, 5, 8, 5]