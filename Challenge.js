// Challenge: Replace With Alphabet Position (6 kyu)

// Instructions:

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

// My code below:

function alphabetPosition(text) {
  // Remove all non-alphabet characters from text, and split into an array.
  let textArr = text.replace(/[^a-zA-Z]/g, "").split("");
  // Create an array containing the alphabet to use in the return statement
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  // We know that textArr only contains alplhabetic characters. So, return the index of each character plus one (to offset the index starting at 0, not 1) in a string.
  return textArr
    .map((char) => alphabet.indexOf(char.toLowerCase()) + 1)
    .join(" ");
}

// Tests below:

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
