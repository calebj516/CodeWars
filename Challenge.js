// Challenge: Get the Middle Character (7 kyu)

// Description:

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// My code below:

function getMiddle(s)
{
  // Math.floor rounds the result down to the closest whole number and prevents an error in the return statement
  // the subscript for s needs to be a whole number; it can't have decimals
  const position = Math.floor(s.length / 2);

  // If length is odd (truthy) return the middle element. 
  // Otherwise, if even (falsy), return two elements, the one before the middle and the middle element.
  return s.length % 2 ? s[position] : s[position - 1] + s[position];
}

// Tests

console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"