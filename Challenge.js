// Challenge: Is the string uppercase? (8 kyu)

// Description:

// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// My code below:

String.prototype.isUpperCase = function () {
  // your code here
  return this == this.toUpperCase();
};

// Tests

console.log("c".isUpperCase()); // false
console.log("C".isUpperCase()); // true
console.log("hello I AM DONALD".isUpperCase()); // false
console.log("HELLO I AM DONALD".isUpperCase()); // true
console.log("ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase()); // false
console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase()); // true
