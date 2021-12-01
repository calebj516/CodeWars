// Challenge: Get decimal part of the given number (7 kyu)

// Description:

// Write a function that returns only the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

// My code below:

const getDecimal = (n) => {
  // Taking the remainder of n divided by 1 will obtain the decimal portion of n.
  // toFixed will match the number of places after the decimal point passed in with n.
  // If there is a decimal point to begin with, take the length after the decimal point. Otherwise, there is no decimal point, and 0 will be returned.
  return Math.abs(n % 1).toFixed(n.toString().split('.')[1] ? n.toString().split('.')[1].length : 0);
}

// Tests below:
console.log(getDecimal(14)); // 0
console.log(getDecimal(2.4)); // 0.4
console.log(getDecimal(-2.46834)); // 0.46834