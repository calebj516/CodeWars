// Challenge: Exclamation marks series #3: Remove all exclamation marks from sentence except at the end (7 kyu)

// Description:

// Remove all exclamation marks from sentence except at the end.

// Examples
// remove("Hi!") == "Hi!"
// remove("Hi!!!") == "Hi!!!"
// remove("!Hi") == "Hi"
// remove("!Hi!") == "Hi!"
// remove("Hi! Hi!") == "Hi Hi!"
// remove("Hi") == "Hi"

// My code below:

const remove = (s) => s.replace(/!+(?!!*$)/g, "");

// Tests

console.log(remove("Hi!")); // "Hi!"
console.log(remove("Hi!!!")); // "Hi!!!"
console.log(remove("!Hi")); // "Hi"
console.log(remove("!Hi!")); // "Hi!"
console.log(remove("Hi! Hi")); // "Hi Hi"
console.log(remove("Hi")); // "Hi"
