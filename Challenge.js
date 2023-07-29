// Challenge: Two numbers are positive (7 kyu)

// Description:

// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false

// My code below:

function twoArePositive(a, b, c) {

  let count = 0;
  const nums = [...arguments];
  
  for(let num of nums) {
    if(num > 0) count++;
  }
  
  return count == 2;
}

// Tests

console.log(twoArePositive(2, 4, -3)); // == true
console.log(twoArePositive(-4, 6, 8)); // == true
console.log(twoArePositive(4, -6, 9)); // == true
console.log(twoArePositive(-4, 6, 0)); // == false
console.log(twoArePositive(4, 6, 10)); // == false
console.log(twoArePositive(-14, -3, -4)); // == false