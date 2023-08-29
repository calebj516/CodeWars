// Challenge: Valid Parenthesis (7 kyu)

// Description:

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

// Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!

// Challenge code below:

function validParenthesis(parenStr) {
  let counter = 0;

  for(let paren of parenStr) {
    paren == '(' ? counter++ : counter--;
    if(counter < 0) return false;
  }

  return counter === 0;
}

// Tests

console.log(validParenthesis("()")); // true 
console.log(validParenthesis("((()))")); // true
console.log(validParenthesis("()()()")); // true
console.log(validParenthesis("(()())()")); // true
console.log(validParenthesis("()(())((()))(())()")); // true

console.log(validParenthesis(")(")); // false
console.log(validParenthesis("()()(")); // false
console.log(validParenthesis("((())")); // false
console.log(validParenthesis("())(()")); // false
console.log(validParenthesis(")()")); // false
console.log(validParenthesis(")")); // false

console.log(validParenthesis("")); // true