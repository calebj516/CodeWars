// Challenge: Identical Elements (7 kyu)

// Description:

// Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

// Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

// My code below:

function duplicateElements(m, n) {
  // some will return true if it at least one test passes.
  // includes will return true if an array contains a certain value among its entries.
  // putting it all together: test each element in m using some, to see if it is included in n (n.includes(v), with v referring to each element in m)
  return m.some(v => n.includes(v));
}

// Tests

// It should handle duplicates

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9])); // true
console.log(duplicateElements([9, 8, 7], [8, 1, 3])); // true
console.log(duplicateElements([-2, -4, -6, -8], [-2, -3, -5, -7])); // true
console.log(duplicateElements([-9, -8, -7], [-8, -1, -3])); // true

// It should handle no duplicates

console.log(duplicateElements([0, 1, 2, 3, 4], [5, 6, 7, 8, 9])); // false

// It should handle empty arrays

console.log(duplicateElements([], [9, 8, 7, 6, 5])); // false
console.log(duplicateElements([9, 8, 7, 6, 5], [])); // false
console.log(duplicateElements([],[])); // false
