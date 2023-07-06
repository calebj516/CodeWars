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

const reverseList = (list) => list.map((num, i) => list[list.length - i - 1]);

// Notes on logic:

// The list.length - i - 1 mirrors the current index, with the - 1 needed to counteract the zero-based indexing of arrays in JS

// Tests

console.log(reverseList([1, 2, 3, 4])); // [4,3,2,1]
console.log(reverseList([3, 1, 5, 4])); // [4,5,1,3]