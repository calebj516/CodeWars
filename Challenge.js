// Challenge: Case Swapping (7 kyu)

// Description:

// Given a string, swap the case for each of the letters.

// e.g. CodEwArs --> cODeWaRS

// My code below:

function swap(str) {
  return str
    .split("")
    .map((letter) =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join("");
}

// Tests

console.log(swap("")); // ""
console.log(swap("CodeWars")); // "cODEwARS"
console.log(swap("abc")); // "ABC"
console.log(swap("ABC")); // "abc"
console.log(swap("123235")); // "123235"
