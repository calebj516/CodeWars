// Challenge: Find the index of the second occurrence of a letter in a string (7 kyu)

// Description:

// Challenge:

// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

// Examples:

// secondSymbol('Hello world!!!','l')  --> 3
// secondSymbol('Hello world!!!', 'A') --> -1
// Good luck ;) And don't forget to rate this Kata if you liked it.

// My code below:

function secondSymbol(s, symbol) {
  // if symbol is in s...
  if(s.includes(symbol)) {
    let firstIndex = s.indexOf(symbol);
    // if the last index of symbol is equal to the result of indexOf, we know there is only one occurrence of symbol in s
    if(firstIndex == s.lastIndexOf(symbol)) {
      return -1;
    }
    // if there are more than one occurrences of symbol in s, start the search from firstIndex + 1
    return s.indexOf(symbol, firstIndex + 1);
  } 
  // if we reach this point, symbol is not in s
  return -1;
}

// Tests

console.log(secondSymbol('Hello world!!!','l')); // 3
console.log(secondSymbol('Hello world!!!', 'o')); // 7
console.log(secondSymbol('Hello world!!!', 'A')); // -1
console.log(secondSymbol('', 'q')); // -1
console.log(secondSymbol('Hello', '!')); // -1
