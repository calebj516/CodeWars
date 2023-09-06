// Challenge: FIXME: Replace all dots (8 kyu)

// https://www.codewars.com/kata/596c6eb85b0f515834000049/javascript

// Description:

// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

// Challenge code below:

var replaceDots = function(str) {
  // added the \ to escape special characters
  // added the g so that replace is run for all occurences in the string
    return str.replace(/\./g, '-');
  }

// Tests

console.log(replaceDots("")); // ""
console.log(replaceDots("no dots")); // "no dots"
console.log(replaceDots("one-two-three")); // "one.two.three"