// Challenge: Sum of numerous arguments (7 kyu)

// Description:

// After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.

// Example
// findSum(1,2,3,4); // returns 10
// findSum(1,-2);    // returns -1
// findSum();        // returns 0
// Hint: research the arguments object on google or read Chapter 4 from Eloquent Javascript

function findSum(...args){
  return args.reduce((total, current) => total < 0 || current < 0 ? -1 : total + current, 0);
}

// Tests
console.log(findSum(1, 3, 5)); // 9, "1 + 3 + 5 = 9"
console.log(findSum()); // 0
console.log(findSum(1, -2, 4)); // -1
console.log(findSum(0)); // 0
console.log(findSum(1, 1, 5)); // 7
console.log(findSum(1, 1, 1, 1, 1, 1, 1, 1, 0)); // 8
console.log(findSum(-1, -1, 5)); // -1
