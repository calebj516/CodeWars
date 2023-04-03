// Challenge: Sum even numbers (7 kyu)

// Description:

// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0

// My code below:

const sumEvenNumbers = (input) =>
  input.reduce(
    (total, current) => total + (current % 2 === 0 ? current : 0),
    0
  );

// Tests

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 30
console.log(sumEvenNumbers([1337, 374, 849, 22.5, 19, 16, 0, 0, 16, 32])); // 438
console.log(sumEvenNumbers([-16, -32, 20, 21, 41, 42])); // 14
