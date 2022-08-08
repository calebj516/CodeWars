// Challenge: All unique (7 kyu)

// Description:

// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

// My code below:

function hasUniqueChars(str){
  // convert str into an array of ascii codes,
  // sort the array so that duplicates will be next to each other,
  // filter out non-duplicates
  // if the array is empty, there are no duplicates and the str has unique chars.
  return str.split('')
    .map(el => el.charCodeAt(0))
    .sort((num1, num2) => num1 - num2)
    .filter((code, idx, arr) => code === arr[idx + 1])
    .length === 0;
}

// Tests

console.log(hasUniqueChars("  nAa")); // false
console.log(hasUniqueChars("abcdef")); // true
console.log(hasUniqueChars("++-")); // false
