// Challenge: Number of Decimal Digits (7 kyu)

// Description:

// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

// My code below:

const digits = (n) => {
  // code goes here
  return n.toString().length;
}

// Tests below:
console.log(digits(12409512)); // 8 
console.log(digits(1234)); // 4
console.log(digits(412)); // 3