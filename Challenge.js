// Challenge: Sum up the random string (7 kyu)

// Description:

// Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.

// Note:

// Consecutive integers should be treated as a single number. eg, 2015 should be treated as a single number 2015, NOT four numbers
// All the numbers should be treaded as positive integer. eg, 11-14 should be treated as two numbers 11 and 14. Same as 3.14, should be treated as two numbers 3 and 14
// If no number was given in the string, it should return 0
// Example:

// str = "In 2015, I want to know how much does iPhone 6+ cost?"
// The numbers are 2015, 6

// Sum is 2021.

// My code below:

const sumFromString = (str) =>
  str
    .replace(/\D/g, " ")
    .split(" ")
    .map(Number)
    .reduce((total, currentNum) => total + currentNum);

// Tests
console.log(
  sumFromString("In 2015, I want to know how much does iPhone 6+ cost?")
); // 2021
console.log(sumFromString("1+1=2")); // 4
console.log(sumFromString("e=mc^2")); // 2
console.log(
  sumFromString("aHR0cDovL3d3dy5jb2Rld2Fycy5jb20va2F0YS9uZXcvamF2YXNjcmlwdA==")
); // 53
console.log(sumFromString("a30561ff4fb19170aa598b1431b52edad1fcc3e0")); // 51820
console.log(sumFromString("x1KT   CmZ__\rYouOY8Uqu-ETtz")); // 9
console.log(sumFromString('x1KT-8&*@"CmZ__\rYouO  __Y8Uq\\u-ETtz')); // 17
console.log(sumFromString("")); // 0, "Empty string should return 0"
console.log(sumFromString("Hello World")); // 0, "String with no numbers should return 0"];
