// Challenge: Trimming a string (7 kyu)

// Description:

// Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// For example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

// If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H...", because 1 <= 3

// Requested maximum length will be greater than 0. Input string will not be empty.

// My code below:

const trim = (str, size) =>
  str.length <= size
    ? str
    : size > 3
    ? str.slice(0, size - 3) + "..."
    : str.slice(0, size) + "...";

// Tests

console.log(trim("Creating kata is fun", 14)); // "Creating ka..."
console.log(trim("He", 1)); // "H..."
console.log(trim("Hey", 2)); // "He..."
console.log(trim("Hey", 3)); // "Hey"
console.log(trim("Creating kata is fun", 2)); // "Cr..."
console.log(trim("Code Wars is pretty rad", 3)); // "Cod..."
console.log(trim("Coding rocks", "Coding rocks".length)); // "Coding rocks"
console.log(trim("Code Wars is pretty rad", 50)); // "Code Wars is pretty rad"
console.log(trim("London is freezing", 18)); // "London is freezing"
