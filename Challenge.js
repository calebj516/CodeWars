// Challenge: Filter the number (JavaScript) (7 kyu)

// Oh no! The number has been mixed up with the text. Your goal is to retreive the number from the text, can you return the number back to it's original state?

// Task:
// Your task is to return a number from a string.

// Details:
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

// My code below:

const FilterString = value => {
  // Remove all non-digit characters, prepend result with '+' to change from string to number
  return +value.replace(/[^\d]/g, "");
}

// Tests below:

console.log(FilterString("123")); // 123
console.log(FilterString("a1b2c3")); // 123
console.log(FilterString("aa1bb2cc3dd")); // 123

