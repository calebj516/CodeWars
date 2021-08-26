// Challenge: Highest Scoring Word (6 kyu)

// Instructions:

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// My code below:

function high(x) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let words = x.split(" "); // This splits x into an array, with each word as an element
  let scores = [];

  // Loop through the array of words.
  for (let word = 0; word < words.length; word++) {
    let score = 0;
    // This nested for loop will loop through each letter in a word and determine score.
    for (let letter = 0; letter < words[word].length; letter++) {
      score += alphabet.indexOf(words[word][letter]) + 1; // add 1 to offset index starting at 0.
    }
    scores.push(score);
  }

  // Determine highest scoring word and return it
  return words[scores.indexOf(Math.max(...scores))];
}

// Tests below:

console.log(high("man i need a taxi up to ubud")); //"taxi"
console.log(high("what time are we climbing up the volcano")); //"volcano"
console.log(high("take me to semynak")); //"semynak"
console.log(high("aa b")); //"aa"
console.log(high("b aa")); //"b"
console.log(high("bb d")); //"bb"
console.log(high("d bb")); //"d"
console.log(high("aaa b")); //"aaa"
