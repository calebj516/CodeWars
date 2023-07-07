// Challenge: Reverse List Order (8 kyu)

// Description:

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// My code below:

const reverseList = (list) => list.reverse();

// Tests

console.log(reverseList([1, 2, 3, 4])); // [4,3,2,1]
console.log(reverseList([3, 1, 5, 4])); // [4,5,1,3]