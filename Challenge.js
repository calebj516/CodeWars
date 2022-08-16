// Challenge: Remove First and Last Character (8 kyu)

// Description:

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// My code below:

// The second paramater in slice counts from the end of the string, so a -1 works (it's equivalent to str.length - 1)

const removeChar = str => str.slice(1, -1);

// Tests

console.log(removeChar('eloquent')); // 'loquen'
console.log(removeChar('country')); // 'ountr'
console.log(removeChar('person')); // 'erso'
console.log(removeChar('place')); // 'lac'
console.log(removeChar('ooopsss')); // 'oopss'
