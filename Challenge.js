// Challenge: Band name generator (7 kyu)

// Description:

// My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

// "dolphin" -> "The Dolphin"

// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

// "alaska" -> "Alaskalaska"

// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.

// My code below:

const bandNameGenerator = (n) =>
  n[0] != n[n.length - 1]
    ? "The " + n[0].toUpperCase() + n.slice(1)
    : n[0].toUpperCase() + n.slice(1) + n.slice(1);

// Tests

console.log(bandNameGenerator("alaska")); // "Alaskalaska"
console.log(bandNameGenerator("dolphin")); // "The Dolphin"
