// Challenge: Numerical Palindrome #4 (6 kyu)

// Description:

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// For a given number num, return its closest numerical palindrome which can either be smaller or larger than num. If there are 2 possible values, the larger value should be returned. If num is a numerical palindrome itself, return it.

// For this kata, single digit numbers will NOT be considered numerical palindromes.

// Also, you know the drill - be sure to return "Not valid" if the input is not an integer or is less than 0.

// palindrome(8) => 11
// palindrome(281) => 282
// palindrome(1029) => 1001
// palindrome(1221) => 1221
// palindrome("1221") => "Not valid"

// My code below:

function isPalindrome(num) {
  // Test if the num is a palindrome AND is greater than or equal to 10 (the first double digit number, which excludes single digit numbers as per the instructions)
  if (num >= 10 && num == num.toString().split("").reverse().join("")) {
    return true;
  }
  return false;
}

function palindrome(num) {
  // If not an integer OR less than zero, invalid input
  if (!Number.isInteger(num) || num < 0) {
    return "Not valid";
  }

  let index = 0;

  // This loop will keep running until one of the if statements' conditions passes.
  // They are arranged so that the larger number will be returned if both tests pass.
  while (true) {
    // Test for numbers greater than or equal to num
    if (isPalindrome(num + index)) {
      return num + index;
    }
    // Test for numbers less than or equal to num
    if (isPalindrome(num - index)) {
      return num - index;
    }
    // If neither test passes, increment the index by one and try again.
    index++;
  }
}

// Tests
console.log(palindrome(8)); // 11
console.log(palindrome(281)); // 282
console.log(palindrome(1029)); // 1001
console.log(palindrome(1221)); // 1221
console.log(palindrome("1221")); // "Not valid"
