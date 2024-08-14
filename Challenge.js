// Challenge: Double Every Other (7 kyu)

// Description:

// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]

// the function should return :

// [1,4,3,8]

// Challenge code below:

function doubleEveryOther(a) {
  return a.map((num, i) => i % 2 != 0 ? num * 2 : num);
}

// Tests

console.log(doubleEveryOther([1,2,3,4])); // [1,4,3,8]
console.log(doubleEveryOther([1,19,6,2,12,-3])); // [1,38,6,4,12,-6]
console.log(doubleEveryOther([-1000,1653,210,0,1])); // [-1000,3306,210,0,1]