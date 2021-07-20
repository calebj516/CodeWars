// Challenge: Find the odd int (6 kyu)

// Instructions:

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// My code below:

const findOdd = (A) => {
  for (let i = 0; i < A.length; i++) {
    if (
      A.filter((item) => {
        return item === A[i];
      }).length %
        2 !=
      0
    ) {
      return A[i];
    }
  }
  return 0;
};

// Tests below:
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // return 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // return -1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // return 5
console.log(findOdd([10])); // return 10
