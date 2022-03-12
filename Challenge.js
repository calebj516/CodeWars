// Challenge: Palindromes Here and There (7 kyu)

// Description:

// An array is given with palindromic and non-palindromic numbers. A palindromic number is a number that is the same from a reversed order. For example 122 is not a palindromic number, but 202 is one.

// Your task is to write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.

// For example:

// [101, 2, 85, 33, 14014]  ==>  [1, 1, 0, 1, 0]
// [45, 21, 303, 56]        ==>  [0, 0, 1, 0]

// My code below:

const convertPalindromes = (numbers) =>
  // convert each number to a string, split into an array, reverse the array, join back into a string, and convert the result back into a number to get the reversed number. Compare to the original number and if it matches, change number to 1; otherwise, 0
  numbers.map((number) =>
    Number(number.toString().split("").reverse().join("")) === number ? 1 : 0
  );

// Tests

console.log(convertPalindromes([22, 303, 76, 411, 89])); // [1, 1, 0, 0, 0]
console.log(convertPalindromes([653, 808, 5])); // [0, 1, 1]
console.log(convertPalindromes([4, 23, 441, 565, 19, 818])); // [1, 0, 0, 1, 0, 1]
