// Challenge: Numerical Palindrome #2 (6 kyu)

// Description:

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// For this kata, single digit numbers will not be considered numerical palindromes.

// For a given number num, write a function to test if the number contains a numerical palindrome or not and return a boolean (true if it does and false if does not). Return "Not valid" if the input is not an integer or is less than 0.

// Note: Palindromes should be found without permutating num.

// palindrome(5) => false
// palindrome(1221) => true
// palindrome(141221001) => true
// palindrome(1215) => true 
// palindrome(1294) => false 
// palindrome("109982") => "Not valid"

// My code below:

function palindrome(num) {
  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
    return 'Not valid';
  }
  let arr = String(num).split('');
 
   if(arr.length > 1){
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr.slice(i, j + 1).reverse().join('') === arr.slice(i, j + 1).join('')) {
            return true;
          }
        }
     }
   }
 
  return false;
 }

// Tests

console.log(palindrome(5)); // => false
console.log(palindrome(1221)); // => true
console.log(palindrome(141221001)); // => true
console.log(palindrome(1215)); // => true 
console.log(palindrome(1294)); // => false 
console.log(palindrome("109982")); // => "Not valid"
