// Challenge: Anagram Detector (7 kyu)

// Instructions:

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// My code below:

const isAnagram = (test, original) => {
  // first, change the characters in test and original to lowercase.
  // second, split the string into an array.
  // third, sort the array. This will arrange the array's contents in alphabetical order.
  // fourth, join the array's elements into a string.
  // lastly, compare both test and original.
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
};

// Tests below:

console.log(isAnagram("foefet", "toffee")); // returns true
console.log(isAnagram("Buckethead", "DeathCubeK")); // returns true
console.log(isAnagram("Twoo", "WooT")); // returns true
console.log(isAnagram("dumble", "bumble")); // returns false
console.log(isAnagram("ound", "round")); // returns false
console.log(isAnagram("apple", "pale")); // returns false
