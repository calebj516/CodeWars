// Challenge: Exes and Ohs (7 kyu)

// Description:

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My code below:

const XO = str => str.replace(/[^x]/gi, '').length == str.replace(/[^o]/gi, '').length;

// Tests

console.log(XO('xo')); // true
console.log(XO('XO')); // true
console.log(XO('xo0')); // true
console.log(XO('xxxoo')); // false
console.log(XO("xxOo")); // true
console.log(XO('')); // true
console.log(XO('xxxxxoooxooo')); // true
console.log(XO("xxxm")); // false
console.log(XO("ooom")); // false
console.log(XO("Oo")); // false
console.log(XO('abcdefghijklmnopqrstuvwxyz')); // true
