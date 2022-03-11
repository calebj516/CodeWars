// Challenge: Reverse words (7 kyu)

// Description:

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples:

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// My code below:

function reverseWords(str) {
  // str.split(" ") gives us an array with the words only (no spaces)
  // map will split each word into an array, upon which we can then use reverse(), which reverses each word.
  // the reversed word array is then joined back into a string
  // finally, we join all the words back together into one string, with a space as a delimiter, which puts the spaces back in.
  return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

// Tests

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple')); // 'elppa'
console.log(reverseWords('a b c d')); // 'a b c d'
console.log(reverseWords('double  spaced  words')); // 'elbuod  decaps  sdrow'
console.log(reverseWords('stressed desserts')); // 'desserts stressed'
console.log(reverseWords('hello hello')); // 'olleh olleh'
