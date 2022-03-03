// Challenge: Testing 1-2-3 (7 kyu)

// Description:

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

// My code below:

const number = array => {
  return array.map((el, idx) => `${idx + 1}: ${el}`);
}

// Tests

console.log(number([])); // [];
console.log(number(["a", "b", "c"])); // ["1: a", "2: b", "3: c"];
console.log(number(["", "", "", "", ""])); // ["1: ", "2: ", "3: ", "4: ", "5: "];
