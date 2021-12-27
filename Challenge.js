// Challenge: Rearrange Number to Get its Maximum (7 kyu)

// Description:

// Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

// Returm null if the argument is invalid.

// maxRedigit(123) --> 321

// My code below:

const maxRedigit = (num) => { 
  // only 3 digit integers are valid. Change to string and test the length to enforce this. If valid...
  // take num, change it to an array and sort it, change it back to a string, and convert to a number
  return num.toString().length === 3 ? Number(num.toString().split('').sort((a, b) => b - a).join('')) : null;
};

// Tests

console.log(maxRedigit(123)); // 321, "123 => 321"
console.log(maxRedigit(231)); // 321, "231 => 321"
console.log(maxRedigit(321)); // 321, "321 => 321"

console.log(maxRedigit(-1)); // null, "-1 => null"
console.log(maxRedigit(0));  // null, "0 => null"
console.log(maxRedigit(99)); // null, "99 => null"
