// Challenge: Exclamation marks series #2: Remove all exclamation marks from the end of sentence

// Description:

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

// My code below:

const remove = (s) => s.replace(/!+$/, "");

// Tests

console.log(remove("Hi!")); // "Hi"
console.log(remove("Hi!!!")); // "Hi"
console.log(remove("!Hi")); // "!Hi"
console.log(remove("!Hi!")); // "!Hi"
console.log(remove("Hi! Hi")); // "Hi! Hi"
console.log(remove("Hi")); // "Hi"
