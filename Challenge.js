// Challenge: Previous Multiple of Three (7 kyu)

// Description:

// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and return null/nil/None/-1 if no such number exists.

// My code below:

const prevMultOfThree = n => {
  // convert n into a string in order to slice it in the while loop (while it is not a multiple of 3)
  n = n.toString();
  // whlie n is not a multiple of 3, set n to the same thing except for the final character
  while(+n % 3 !== 0) {
    n = n.slice(0, n.length-1);
  }
  // if all of n was removed, there is no multiple of 3 present. Return null.
  // otherwise return n, converted to a number
  return n.length == 0 ? null : +n;
}

// Tests

console.log(prevMultOfThree(1)); // null
console.log(prevMultOfThree(25)); // null
console.log(prevMultOfThree(36)); // 36
console.log(prevMultOfThree(1244)); // 12
console.log(prevMultOfThree(952406)); // 9
