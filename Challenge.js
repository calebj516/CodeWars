// Challenge: Dot Calculator (7 kyu)

// Description:

// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""

// My code below:

function dotCalculator (equation) {
  
  // Use destructuring to obtain the first part, the operator, and the last part of the equation
  let [ a, op, b ] = equation.split(' ');
  
  console.log(op[0]);
  // repeat the '.' character as many times as the result of the equation
  return '.'.repeat(eval(a.length + op[0] + b.length));
  
}

// Tests

console.log(dotCalculator("..... + ...............")); // "...................."
console.log(dotCalculator("..... - ...")); // ".."
console.log(dotCalculator("..... - .")); // "...."
console.log(dotCalculator("..... * ...")); // "..............."
console.log(dotCalculator("..... * ..")); // ".........."
console.log(dotCalculator("..... // ..")); // ".."
console.log(dotCalculator("..... // .")); // "....."
console.log(dotCalculator(". // ..")); // ""
console.log(dotCalculator(". - .")); // ""
