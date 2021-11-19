// Challenge: Format a string of names like 'Bart, Lisa & Maggie'. (6 kyu)

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

// My code below:

const list = (names) => {
  return names.reduce((prev, current, currentIndex, array) => {
    if (currentIndex === 0) {
      return current.name;
    } else if (currentIndex === array.length - 1) {
      return prev + " & " + current.name;
    } else {
      return prev + ", " + current.name;
    }
  }, "");
};

// Tests below:
console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));
// returns 'Bart, Lisa & Maggie'

console.log(list([{ name: "Bart" }, { name: "Lisa" }]));
// returns 'Bart & Lisa'

console.log(list([{ name: "Bart" }]));
// returns 'Bart'

console.log(list([]));
// returns ''
