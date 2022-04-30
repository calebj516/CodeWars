// Challenge: Vowel Count (7 kyu)

// Description

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My code below:

// The regular expression matches everything that is not a vowel and replaces the matches with an empty string, which removes them
// Taking the length of the array that is created gives us our answer.
const getCount = str => str.replace(/[^aeiou]/gi, '').length;

// Tests

console.log(getCount("abracadabra")); // 5
console.log(getCount("pear tree")); // 4
console.log(getCount("o a kak ushakov lil vo kashu kakao")); // 13