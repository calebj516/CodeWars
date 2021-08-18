// Challenge: Panagram Detector (6 kyu)

// Instructions:

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// My code below:

function isPangram(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  str = str.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    // if a character of the alphabet is not found in str, this immediately disqualifies str from being a panagram. Return false.
    if (str.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  // otherwise if we exit the for loop without returning false, we know str is a panagram. Return true.
  return true;
}

// Tests below:

console.log(isPangram("This isn't a pangram!")); // false
console.log(isPangram("abcdefghijklmopqrstuvwxyz ")); // false
console.log(isPangram("Pack my box with five dozen liquor jugs.")); // true
console.log(isPangram("How quickly daft jumping zebras vex.")); // true
