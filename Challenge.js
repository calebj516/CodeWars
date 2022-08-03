// Challenge: Is It Negative Zero (-0)? (7 kyu)

// Description:

// There exist two zeroes: +0 (or just 0) and -0.

// Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

// In JavaScript / TypeScript / Coffeescript the input will be a number.

// In Python / Java / C / NASM / Haskell / the input will be a float.

// My code below:

// MDN: The Object.is() method determines whether two values are the same value.
// MDN: The only difference between Object.is() and === is in their treatment of signed zeroes and NaNs. For example, the === operator (and the == operator) treats the number values -0 and +0 as equal.

const isNegativeZero = n => Object.is(n, -0);

// Tests

console.log(isNegativeZero(-0)); // true
console.log(isNegativeZero(-Infinity)); // false
console.log(isNegativeZero(-5)); // false
console.log(isNegativeZero(-4)); // false
console.log(isNegativeZero(-3)); // false
console.log(isNegativeZero(-2)); // false
console.log(isNegativeZero(-1)); // false
console.log(isNegativeZero(-Number.MIN_VALUE)); // false
console.log(isNegativeZero(0)); // false