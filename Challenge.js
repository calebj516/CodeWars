// Challenge: Duplicate Encoder (6 kyu)

// Description:

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// My code below:

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((letter, idx, arr) =>
      arr.indexOf(letter) == arr.lastIndexOf(letter) ? "(" : ")"
    )
    .join("");
}

// Tests
console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())"
console.log(duplicateEncode("(( @")); // "))(("
