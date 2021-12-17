// Challenge: Ones and Zeros (7 kyu)

// Description:

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

// However, the arrays can have varying lengths, not just limited to 4.

// Good luck!

// My code below:

const binaryArrayToNumber = (arr) => {
  // determine binary numbers based on arr length
  const numbers = [1];
  for (let i = 0; i < arr.length - 1; i++) {
    numbers.push(numbers[i] * 2);
  }
  numbers.reverse();
  // loop through arr, multiplying each number by the value of its binary place
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += arr[i] * numbers[i];
  }
  return sum;
};

// Tests

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
console.log(binaryArrayToNumber([0, 1, 1, 0])); // 6
