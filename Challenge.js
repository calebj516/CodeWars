// Challenge: Regex Password Validation (5 kyu)

// Instructions:

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

// My code below:

function validate(password) {
  // Each ?=.* section looks through the entire string and must be matched at least once: at least one lowercase, one uppercase, and one number
  // the [] section at the end excludes non-alphanumeric characters
  // the {n,} pattern means there must be at least n characters (in this case, 6)
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/.test(password);
}

// Tests below:

console.log(validate("djI38D55")); // "djI38D55 - Expected true");
console.log(validate("a2.d412")); // "a2.d412 - Expected false");
console.log(validate("JHD5FJ53")); // "JHD5FJ53 - Expected false");
console.log(validate("!fdjn345")); // "!fdjn345 - Expected false");
console.log(validate("jfkdfj3j")); // "jfkdfj3j - Expected false");
console.log(validate("123")); // "123 - Expected false");
console.log(validate("abc")); // "abc - Expected false"
console.log(validate("Password123")); // "Password123 - Expected true"
