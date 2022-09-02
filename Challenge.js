// Challenge: Invert values (8 kyu)

// Description:

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.

// My code below:

// const getRealFloor = n => n > 13 ? n - 2 : n > 0 ? n - 1 : n;

const invert = array => array.map(num => num * -1);

// Tests

console.log(invert([1,2,3,4,5])); // [-1,-2,-3,-4,-5])
console.log(invert([1,-2,3,-4,5])); // [-1,2,-3,4,-5]
console.log(invert([])); // []
console.log(invert([0])); // [-0]
