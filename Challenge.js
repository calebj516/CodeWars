// Challenge: Reverse a Number (7 kyu)

// Description:

// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// My code below:

function reverseNumber(n) {
  // reverse the string.
  n = n.toString().split("").reverse();
  // if the last character is a minus sign, remove it from the array and add it to the beginning instead.
  if(n[n.length - 1] === "-"){
    n.pop();
    n.unshift("-");
  }
  // return the array joined into a string, and converted into a number by prepending the final result with a plus sign.
  return +(n.join(""));
}

// Tests below:
console.log(reverseNumber("123")); // 321
console.log(reverseNumber("-456")); // -654
console.log(reverseNumber("1000")); // 1
