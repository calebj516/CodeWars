// Challenge: Alternate case (7 kyu)

// Description:

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// My code below:

function alternateCase(s) {
  return s
    .split("")
    .map((letter) =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join("");

// Tests

console.log(alternateCase("abc")); // "ABC"
console.log(alternateCase("ABC")); // "abc"
console.log(alternateCase("Hello World")); // "hELLO wORLD"
console.log(alternateCase("CodeWars")); // "cODEwARS"
console.log(alternateCase("i LIKE MAKING KATAS VERY MUCH!")); // "I like making katas very much!"
