// Challenge: Peak array index (7 kyu)

// Description:

// Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1. If there is more than one such index, return the left-most index.

// For example:

// peak([1,2,3,5,3,2,1]) = 3, because the sum of the elements at indexes 0,1,2 == sum of elements at indexes 4,5,6. We don't sum index 3.
// peak([1,12,3,3,6,3,1]) = 2
// peak([10,20,30,40]) = -1

// The special case of an array of zeros (for instance [0,0,0,0]) will not be tested.

// More examples in the test cases.

// Good luck!

// My code below:

function peak(arr) {
  // variable for final result
  let resultIndex = -1;
  // loop through arr, starting at index 1.
  for (let i = 1; i < arr.length; i++) {
    // extract from arr start up to and including i
    let slicedArr1 = arr.slice(0, i);
    // extract from one index ahead of i, not i itself! This is because we are comparing all values to the left and right of i
    let slicedArr2 = arr.slice(i + 1);
    // using array reduce, if the totals match, set resultIndex to i
    if (
      slicedArr1.reduce((prev, current) => prev + current, 0) ===
      slicedArr2.reduce((prev, current) => prev + current, 0)
    ) {
      resultIndex = i;
      // break out of the loop because the challenge stipulates that we want the first valid index.
      break;
    }
  }
  // if no index was assigned during the loop, we know nothing was found. Value will remain at -1.
  return resultIndex;
}

// Tests

console.log(peak([1, 2, 3, 5, 3, 2, 1])); // 3
console.log(peak([1, 12, 3, 3, 6, 3, 1])); // 2
console.log(peak([10, 20, 30, 40])); // -1
