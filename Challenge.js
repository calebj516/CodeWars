// Challenge: Find the position! (8 kyu)

// Description:

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// My code below:

const position = letter => `Position of alphabet: ${letter.toLowerCase().charCodeAt() - 96}`;

// Notes on logic:

// The ASCII character codes for the alphabet start at 97, therefore subtracting 96 obtains the position in the alphabet.

// Tests

console.log(position("a")); // "Position of alphabet: 1"
console.log(position("z")); // "Position of alphabet: 26"
console.log(position("e")); // "Position of alphabet: 5"