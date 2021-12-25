// Challenge: Largest pair sum in array (7 kyu)

// Description:

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

// My code below:

function largestPairSum(numbers)
{
  // sort by ascending order, take the last two elements and sum them up using reduce
  return numbers.sort((a, b) => a - b).slice(-2).reduce((total, current) => total + current);
}

// Tests

console.log(largestPairSum([10,14,2,23,19])); // 42
console.log(largestPairSum([-100,-29,-24,-19,19])); // 0 
console.log(largestPairSum([1,2,3,4,6,-1,2])); // 10 
console.log(largestPairSum([-10, -8, -16, -18, -19])); // -18;
