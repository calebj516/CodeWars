// Challenge: Fix String Case (7 kyu)

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// My code below:

const solve = (s) => {

  // Compare length of s with all lowercase removed (leaving only uppercase) to length with all uppercase removed (leaving only lowercase)
  // If the length of the uppercase is greater, change s to uppercase, otherwise change to lowercase.

  let sLower = s.replace(/[A-Z]/g, "");
  let sUpper = s.replace(/[a-z]/g, "");
  
  return sUpper.length > sLower.length ? s.toUpperCase() : s.toLowerCase();
  
}

// Tests below:

console.log(solve("coDe")); // code
console.log(solve("CODe")); // CODE
console.log(solve("coDE")); // code

