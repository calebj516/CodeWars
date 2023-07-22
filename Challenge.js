// Challenge: Remove duplicates from list (8 kyu)

// Description:

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// My code below:

const distinct = a => [...new Set(a)];

// Notes on logic:

// Passing a to the Set constructor creates an object with only unique values.
// The spread operator converts this object to an array since the expression is encased with brackets.

// Tests

console.log(distinct([1])); // [1]
console.log(distinct([1,2])); // [1,2]
console.log(distinct([1,1,2])); // [1,2]
console.log(distinct([1,1,1,2,3,4,5])); // [1,2,3,4,5]
console.log(distinct([1,2,2,3,3,4,4,5,6,7,7,7])); // [1,2,3,4,5,6,7]