// Challenge: Finding length of the sequence (7 kyu)

// Description:

// As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

// For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

// If there are less or more than two occurrences of the number to search for, return 0.

// Challenge code below:

const lengthOfSequence = (arr, n) => arr.filter(num => num == n).length == 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;

// Tests

console.log(lengthOfSequence([1], 0)); // 0, 'Returns zero when the element is not found in the array'
console.log(lengthOfSequence([1], 1)); // 0, 'Returns zero with only one element in the array'
console.log(lengthOfSequence([1, 1], 1)); // 2, 'Returns two when there are only two elements in the array'
console.log(lengthOfSequence([1, 2, 3, 1], 1)); // 4, 'Returns four for an array of length four and the number to be searched at the boundaries'
console.log(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5)); // 5, 'Returns five'
console.log(lengthOfSequence([-7, 6, 2, -7, 4], -7)); // 4, 'Returns four'
console.log(lengthOfSequence([0, 8, -7, 6, 1, 2, -7, 4, 8, 9], 8)); // 8, 'Returns eight'
console.log(lengthOfSequence([-7, 3, -7, -7, 2, 1], -7)); // 0, 'Returns zero as when there are more than two instances'