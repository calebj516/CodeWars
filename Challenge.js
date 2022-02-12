// Challenge: Create Phone Number (6 kyu)

// Description:

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// My code below:

function createPhoneNumber(numbers) {
  // The first parameter of replace sets up three capturing groups. 
  // the first two groups contain three characters and the last group contains 4 characters.
  // the second parameter adds parentheses around the first group, a space in between the first and second groups,
  // and a hyphen between the second and third groups.
  return numbers.join('').replace(/(...)(...)(....)/, "($1) $2-$3");
}

// Tests

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // "(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
