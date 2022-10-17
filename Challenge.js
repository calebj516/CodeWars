// Challenge: Reverse every other word in the string (6 kyu)

// Description:

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// My code below:

const reverse = (str) =>
  str
    .split(" ")
    .map((word, idx) =>
      idx % 2 !== 0 ? word.trim().split("").reverse().join("") : word
    )
    .join(" ")
    .trim();

// Tests

console.log(reverse("Did it work?")); // "Did ti work?"
console.log(reverse("I really hope it works this time...")); // "I yllaer hope ti works siht time..."
console.log(reverse("Reverse this string, please!")); // "Reverse siht string, !esaelp"
console.log(reverse("   ")); // ""
