// Challenge: Draw stairs (8 kyu)

// Description:

// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I

// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

// My code below:

function drawStairs(n) {

  let result = "I";
  
  for (let i = 1; i < n; i++) {
    result += '\n' + ' '.repeat(i) + "I";
  }
  
  return result;
}

// Tests

console.log(drawStairs(1)); // "I"
console.log(drawStairs(3)); // "I\n I\n  I"
console.log(drawStairs(5)); // "I\n I\n  I\n   I\n    I"