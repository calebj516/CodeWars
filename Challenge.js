// Challenge: Grasshopper - Combine strings (8 kyu)

// Description:

// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'

// Challenge code below:

const combineNames = (...str) => [...str].join(' ');

// Tests

console.log(combineNames('James', 'Stevens')); //  'James Stevens'