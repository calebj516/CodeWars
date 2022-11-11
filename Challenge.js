// Challenge: Find the missing letter (6 kyu)

// Description:

// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// My code below:

function findMissingLetter(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let currentCharCode = array[i].charCodeAt();
    let nextCharCode = array[i + 1].charCodeAt();

    if (nextCharCode - currentCharCode > 1) {
      currentCharCode++;
      return String.fromCharCode(currentCharCode);
    }
  }

  throw new Error("Invalid Input!");
}

// Tests

console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // "e"
console.log(findMissingLetter(["O", "Q", "R", "S"])); // "P"
