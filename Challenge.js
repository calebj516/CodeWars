// Challenge: Spoonerize Me (7 kyu)

// Description:

// A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

// In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

// "not picking" --> "pot nicking"

// Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example.

// NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.

// Once you have completed this kata, a slightly more challenging take on the idea can be found here: http://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd

// My code below:

function spoonerize(words) {
  let word = words.split(' ');
  // Note on slice() from MDN: if endIndex is omitted slice() extracts to the end of the string. (E.g. "test".slice(1) returns "est")
  // So, word[0].slice(1) and word[1].slice(1) returns the entire word except for the first character. Adding the first character in front of these gives us the answer.
  return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(' ');
}

// Tests

console.log(spoonerize("not picking")); // "pot nicking"
console.log(spoonerize("wedding bells")); // "bedding wells"
console.log(spoonerize("jelly beans")); // "belly jeans"
console.log(spoonerize("pop corn")); // "cop porn"
