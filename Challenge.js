// Challenge: Consecutive Items (7 kyu)

// Description:

// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

// My code below:

// If the index of a and b are 1 apart, we know they occur consecutively.
// Using Math.abs ensures that our result will always be positive. We don't need to be concerned with which number is greater than the other.
const consecutive = (arr, a, b) =>
  Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;

// Tests

console.log(consecutive([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 8)); // false
console.log(consecutive([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 3)); // true
console.log(consecutive([1, 4, 5, 3, 2, 7, 6, 23, 76, 11, 0], 2, 3)); // true
console.log(consecutive([1, -4, -5, 3, -2, 11, 23, -76, 6, -7, 2], 2, 3)); // false
console.log(consecutive([1, 2, 3, 4, 5], 1, 5)); // false
console.log(consecutive([1, 2, 3, 4, 5], 5, 1)); // false
