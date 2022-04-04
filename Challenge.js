// Challenge: Numerical Palindrome #3 (6 kyu)

// Description:

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// For a given number num, write a function which returns the number of numerical palindromes within each number. For this kata, single digit numbers will NOT be considered numerical palindromes.

// Return "Not valid" if the input is not an integer or is less than 0.

// palindrome(5) => 0
// palindrome(1221) => 2
// palindrome(141221001) => 5
// palindrome(1294) => 0
// palindrome("1221") => "Not valid"

// My code below:

function palindrome(num) {
  if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
    return "Not valid";
  }

  let arr = [...num.toString()];
  let count = 0;

  if (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (
          arr
            .slice(i, j + 1)
            .reverse()
            .join("") === arr.slice(i, j + 1).join("")
        ) {
          count++;
        }
      }
    }
  }

  return count;
}

// Tests
console.log(palindrome(5)); // 0
console.log(palindrome(1221)); // 2
console.log(palindrome(141221001)); // 5
console.log(palindrome(1294)); // 0
console.log(palindrome("1221")); // "Not valid"
