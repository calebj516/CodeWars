// Challenge: Find the missing element between two arrays (7 kyu)

// Description:

// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// My code below:

const arrayDiff = (arr1, arr2) => {
  // Since we know that the two arrays are comprised of numbers, we can total up the two and subtract the second from the first to find the difference.
  return arr1.reduce((prev, current) => prev + current, 0) - arr2.reduce((prev, current) => prev + current, 0);
}

// Tests below:
console.log(arrayDiff([1, 2, 2, 3], [1, 2, 3])); // 2
console.log(arrayDiff([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])); // 8
console.log(arrayDiff([0], [0])); // 0
