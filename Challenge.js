// Challenge: Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right (8 kyu)

// Description:

// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples:

// remove("Hi!", 1) === "Hi";
// remove("Hi!", 100) === "Hi";
// remove("Hi!!!", 1) === "Hi!!";
// remove("Hi!!!", 100) === "Hi";
// remove("!Hi", 1) === "Hi";
// remove("!Hi!", 1) === "Hi!";
// remove("!Hi!", 100) === "Hi";
// remove("!!!Hi !!hi!!! !hi", 1) === "!!Hi !!hi!!! !hi";
// remove("!!!Hi !!hi!!! !hi", 3) === "Hi !!hi!!! !hi";
// remove("!!!Hi !!hi!!! !hi", 5) === "Hi hi!!! !hi";
// remove("!!!Hi !!hi!!! !hi", 100) === "Hi hi hi";

// My code below:

const remove = (s, n) => (n ? remove(s.replace("!", ""), n - 1) : s);

// Tests

console.log(remove("Hi!", 1)); // "Hi";
console.log(remove("Hi!!!", 100)); // "Hi";
console.log(remove("Hi!!!", 1)); // "Hi!!"
