// Challenge: The Vowel Code (6 kyu)

// Instructions:

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// My code below:

function encode(string) {
  // Pseudocode below:
  // Split string into an array
  // Use map to loop through each element
  // Evaluate each element using nested ternary operators
  return string
    .split("")
    .map((c) =>
      c === "a"
        ? 1
        : c === "e"
        ? 2
        : c === "i"
        ? 3
        : c === "o"
        ? 4
        : c === "u"
        ? 5
        : c
    )
    .join("");
}

function decode(string) {
  // Process is nearly identical to the encode function
  // Note: using the equality operator ('==') as opposed to the strict equality operator. This will convert n to a number before making the comparison.
  return string
    .split("")
    .map((n) =>
      n == 1
        ? "a"
        : n == 2
        ? "e"
        : n == 3
        ? "i"
        : n == 4
        ? "o"
        : n == 5
        ? "u"
        : n
    )
    .join("");
}

// Tests below:

console.log(encode("hello")); // h2ll4
console.log(decode("h2ll4")); // hello
