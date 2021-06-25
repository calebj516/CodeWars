// Challenge: Summing a number's digits (7 kyu)

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5
// Let's assume that all numbers in the input will be integer values.

// My Code Below

function sumDigits(number) {
  // turn number into an array containing the absolute value of each number
  let numbers = String(Math.abs(number)).split("");
  // declare variable that will contain the sum of each number
  let sum = 0;
  // loop through the array, summing up each number
  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
  }
  // return the sum
  return sum;
}

// Tests below

console.log(sumDigits(10)); // Returns 1
console.log(sumDigits(99)); // Returns 18
console.log(sumDigits(-32)); // Returns 5
