// Challenge: Between Extremes (7 kyu)

// Description:

// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

// My code below:

const betweenExtremes = (numbers) => findMaxNum(numbers) - findMinNum(numbers);

const findMinNum = (nums) => {
  return [...nums].sort((a, b) => a - b)[0];
};

const findMaxNum = (nums) => {
  return [...nums].sort((a, b) => a - b)[nums.length - 1];
};

// Tests

console.log(betweenExtremes([-23, 23])); // 46
console.log(betweenExtremes([21, 34, 54, 43, 26, 12])); // 42
console.log(betweenExtremes([-1, -41, -77, -100])); // 99
