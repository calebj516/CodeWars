// Challenge: Digit Explosion (7 kyu)

// Description:

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312"); // => "333122"
// explode("102269"); // => "12222666666999999999"

// My code below:

function explode(s) {
  // split s into an array
  // loop through s, changing each number into the same number, but repeated the number of times equal to the number
  // join s back into a string
  return s.split('').map((num) => num.repeat(num)).join('');
}

// Tests

console.log(explode("312")); // 333122
console.log(explode("102269")); // 12222666666999999999
