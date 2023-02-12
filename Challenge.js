// Challenge: Detect Pangram (6 kyu)

// Description:

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// My code below:

function isPangram(string) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

  string = string.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    if (!string.includes(alphabet[i])) return false;
  }

  return true;
}

// Tests

console.log(isPangram("This isn't a pangram!")); // false
console.log(isPangram("abcdefghijklmopqrstuvwxyz ")); // false
console.log(isPangram("Cwm fjord bank glyphs vext quiz")); // true
console.log(isPangram("How quickly daft jumping zebras vex.")); // true
