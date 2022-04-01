// Challenge: Numerical Palindrome #1.5 (6 kyu)

// Description:

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// You'll be given 2 numbers as arguments: (num,s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count.

// Return "Not valid" instead if any one of the inputs is not an integer or is less than 0.

// For this kata, single digit numbers will NOT be considered numerical palindromes.

// palindrome(6,4) => [11,22,33,44]
// palindrome(59,3) => [66,77,88]
// palindrome(101,2) => [101,111]
// palindrome("15651",5) => "Not valid" 
// palindrome(1221,"8") => "Not valid" 

// My code below:

function palindrome(num,s) { 
  
  // if either parameter isn't a number or negative, it is invalid
  if(typeof num !== 'number' || typeof s !== 'number' || num < 0 || s < 0){
    return "Not valid";
  }
  
  const resultArr = [];
  // the starting value will never be a single digit integer which excludes them from being included in the results,
  // as per the instructions.
  // any number n that passes the palindrome test will be added to resultArr up to s times
  for(let n = Math.max(10, num); resultArr.length < s; n++){
    if(isPalindrome(n)){
      resultArr.push(n);
    }
  }
  
  return resultArr;
}

function isPalindrome(val) {
  if(val.toString().split('').reverse().join('') == val){
    return true;
  }
  return false;
}

// Tests

console.log(palindrome(6,4)); // => [11,22,33,44]
console.log(palindrome(59,3)); // => [66,77,88]
console.log(palindrome(101,2)); // => [101,111]
console.log(palindrome("15651",5)); // => "Not valid" 
console.log(palindrome(1221,"8")); // => "Not valid" 
