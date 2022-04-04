// Challenge: Numerical Palindrome #3.5 (6 kyu)

// Description:

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are: 2332, 110011, 54322345

// For a given number num, write a function which returns an array of all the numerical palindromes contained within each number. The array should be sorted in ascending order and any duplicates should be removed.

// In this kata, single digit numbers and numbers which start or end with zeros (such as 010 and 00) are NOT considered valid numerical palindromes.

// If num contains no valid palindromes, return "No palindromes found". Otherwise, return "Not valid" if the input is not an integer or is less than 0.

// Examples
// palindrome(1221)      =>  [22, 1221]
// palindrome(34322122)  =>  [22, 212, 343, 22122]
// palindrome(1001331)   =>  [33, 1001, 1331]
// palindrome(1294)      =>  "No palindromes found"
// palindrome("1221")    =>  "Not valid"

// My code below:

function palindrome(num) {
  
  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
    return 'Not valid';
  }
   
  let arr = String(num).split('');
  let result = [];
 
 
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr.slice(i, j + 1).reverse().join('') === arr.slice(i, j + 1).join('')) {
          let palindrome = arr.slice(i, j + 1).join('');
          // If the starting and ending numbers are not zero and the result array does not already include the palindrome...
          // ...push it to the result array.
          if(palindrome[0] !== '0' && palindrome[palindrome.length - 1] !== '0' && !result.includes(+palindrome)){
             result.push(+arr.slice(i, j + 1).join(''));
          }
        }
      }
   }
   // sort results in ascending order
   result = result.sort((num1, num2) => num1 - num2);
 
   return result.length > 0 ? result : "No palindromes found";
 }

// Tests
console.log(palindrome(2)); // "No palindromes found"
console.log(palindrome(1551)); // [55,1551]
console.log(palindrome(221122)); // [11,22,2112,221122]
console.log(palindrome(10015885)); // [88,1001,5885]
console.log(palindrome(13598)); // "No palindromes found"
console.log(palindrome("ACCDDCCA")); // "Not valid"
console.log(palindrome("1551")); // "Not valid"
console.log(palindrome(-4505)); // "Not valid"
