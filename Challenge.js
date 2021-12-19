// Challenge: Double Trouble (7 kyu)

// Description:

// Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

// Example:

// x = [1, 2, 3, 4, 5]
// t = 3

// 1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

// [1, 3, 4, 5]

// Work through the array from left to right.

// Return the resulting array.

// My code below:

const trouble = (x, t) => {
  let arr = x;
  for (let i = 1; i < arr.length; ++i) {
    // splice changes the array it is used on. When an item is removed, the index advances by one. This effect needs to be offset by subtracting one from the index.
    if (arr[i] + arr[i - 1] === t) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

// Tests

console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7)); // [1, 3, 5, 6, 7, 4])
console.log(trouble([4, 1, 1, 1, 4], 2)); // [4, 1, 4])
console.log(trouble([2, 2, 2, 2, 2, 2], 4)); // [2]
console.log(trouble([2, 6, 2], 8)); // [2, 2]
