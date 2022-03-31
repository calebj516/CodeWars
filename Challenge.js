// Challenge: Numerical Palindrome #1 (7 kyu)

// Description:

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).

// Return "Not valid" if the input is not an integer or less than 0.

// My code below:

function palindrome(num) { 
  
  if(typeof num === 'number' && num >= 0){
    // the equality operator '==' does the type coercion for us (i.e., we do not have to convert num to a string)
    return num.toString().split('').reverse().join('') == num;   
  }
  
  return "Not valid";

} 

// Tests

console.log(palindrome(1221)); // true
console.log(palindrome(110011)); // true
console.log(palindrome(1456009006541)); // true
console.log(palindrome(123322)); // false
console.log(palindrome(1)); // true
console.log(palindrome(152)); // false
console.log(palindrome(9999)); // true
console.log(palindrome("ACCDDCCA")); // "Not valid"
console.log(palindrome("@14AbC")); // "Not valid"
console.log(palindrome("1221")); // "Not valid"
console.log(palindrome(-450)); // "Not valid"
