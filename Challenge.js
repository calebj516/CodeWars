// Challenge: Maximum Product (7 kyu)

// Description:

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes.

// My code below:

function adjacentElementsProduct(array) {
  let newArr = [];
  // push the product of each element and its proceeding value to the newArr array.
  for (let i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1]);
  }
  // the spread operator lists out all the values contained in newArr, which Math.max operates on to get the maximum value.
  return Math.max(...newArr);
}

// Tests below:
console.log(adjacentElementsProduct([5, 8])); // 40
console.log(adjacentElementsProduct([1, 2, 3])); // 6
console.log(adjacentElementsProduct([1, 5, 10, 9])); // 90
console.log(adjacentElementsProduct([4, 12, 3, 1, 5])); // 48
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])); // 6
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
