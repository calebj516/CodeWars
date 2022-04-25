// Challenge: Sum of numerous arguments (7 kyu)

// Description:

// After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.

// Example
// findSum(1,2,3,4); // returns 10
// findSum(1,-2);    // returns -1
// findSum();        // returns 0
// Hint: research the arguments object on google or read Chapter 4 from Eloquent Javascript

function findSum(...args) {
  // if there is a negative number, return -1
  if (args.filter((num) => num < 0).length > 0) {
    return -1;
  }
  // if there are no arguments passed in, return []
  if (args === []) {
    return [];
  }
  // otherwise return the sum of the numbers passed in
  return args.reduce((total, currentNum) => total + currentNum, 0);
}

// Tests
console.log(findSum(1, 3, 5)); // 9, "1 + 3 + 5 = 9"
console.log(findSum()); // 0, "If no arguments, function should return 0"
console.log(findSum(1, -2, 4)); // -1, "If negative arguments are passed, function should return -1"
console.log(findSum(0)); // 0, "The sum of 0 is 0"
console.log(findSum(1, 1, 5)); // 7, "Your sum is incorrect"
console.log(findSum(1, 1, 1, 1, 1, 1, 1, 1, 0)); // 8,"Your sum is incorrect"

console.log(findSum(-1, -1, 5)); // -1, "Your sum is incorrect"
console.log(findSum(-1, -1, -5)); // -1, "Your sum is incorrect"
