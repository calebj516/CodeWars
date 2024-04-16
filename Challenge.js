// Challenge: Remove exclamation marks (8 kyu)

// Description:

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// Challenge code below:

const removeExclamationMarks = s => s.replace(/!/g, '');

// Tests

console.log(removeExclamationMarks("Hello World!")); // "Hello World"
console.log(removeExclamationMarks("Hello World!!!")); // "Hello World"
console.log(removeExclamationMarks("Hi! Hello!")); // "Hi Hello"
