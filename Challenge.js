// Challenge: Merging sorted integer arrays (without duplicates) (7 kyu)

// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// Challenge code below:

const mergeArrays = (a, b) => Array.from(new Set([...a,...b].sort((a, b) => a - b)));

// Tests

console.log(mergeArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays([2, 4, 8], [2, 4, 6])); // [2, 4, 6, 8]
console.log(mergeArrays([1, 2, 3], [])); // [1, 2, 3]
console.log(mergeArrays([1, 1, 2], [])); // [1, 2]
console.log(mergeArrays([], [])); // []