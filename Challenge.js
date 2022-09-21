// Challenge: Exclamation marks series #9: Remove or add a exclamation mark at the end of words of the sentence (7 kyu)

// Description:

// Remove or add a exclamation mark at the end of words of the sentence. Words are separated by spaces in the sentence. That is: If a word has one ! at the end, remove it; If a word has no ! at the end, add a ! to the end; If there are more than one ! at the end of word, keep it.

// Examples
// removeOrAdd("Hi!") === "Hi"
// removeOrAdd("Hi! Hi!") === "Hi Hi"
// removeOrAdd("Hi! Hi") === "Hi Hi!"
// removeOrAdd("Hi! Hi Hi!!") === "Hi Hi! Hi!!"
// removeOrAdd("!Hi! !Hi !Hi!!") === "!Hi !Hi! !Hi!!"

// My code below:

const removeOrAdd = (str) =>
  str.replace(/\w\b!*/g, (x) =>
    x.length === 1 ? x + "!" : x.length === 2 ? x[0] : x
  );

// Tests

console.log(removeOrAdd("Hi!")); // "Hi"
console.log(removeOrAdd("Hi! Hi!")); // "Hi Hi"
console.log(removeOrAdd("Hi! Hi")); // "Hi Hi!"
console.log(removeOrAdd("Hi! Hi Hi!!")); // "Hi Hi! Hi!!"
console.log(removeOrAdd("!Hi! !Hi !Hi!!")); // "!Hi !Hi! !Hi!!"
