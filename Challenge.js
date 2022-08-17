// Challenge: Make acronym (7 kyu)

// Description:

// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them together

// Eg:

// Code wars -> C, w -> C W -> CW

// My code below:

const toAcronym = inp => inp.split(' ').map(el => el.slice(0, 1)).join('').toUpperCase();

// Tests

console.log(toAcronym("Code Wars")); // CW
console.log(toAcronym("Water Closet")); // WC
console.log(toAcronym("Portable Network Graphics")); // PNG
console.log(toAcronym("PHP: Hypertext Preprocessor")); // PHP
console.log(toAcronym("hyper text markup language")); // HTML
