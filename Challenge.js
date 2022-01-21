// Challenge: Changing letters (7 kyu)

// Description:

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

// My code below:

function swap(string) {
  // array to hold vowels
  const vowels = ["a", "e", "i", "o", "u"];
  // use array method includes to test each element to see if it is in vowels; if so, change it to uppercase, otherwise, do nothing.
  return string
    .split("")
    .map((el) => (vowels.includes(el) ? el.toUpperCase() : el))
    .join("");
}

// Tests

console.log(swap("")); // ""
console.log(swap("   @@@")); // "   @@@"
console.log(swap("HelloWorld!")); // "HEllOWOrld!"
console.log(swap("Sunday")); // "SUndAy"
console.log(swap("Codewars")); // "COdEwArs"
console.log(swap("Monday")); // "MOndAy"
console.log(swap("Friday")); // "FrIdAy"
console.log(swap("abracadabra")); // "AbrAcAdAbrA"
console.log(swap("AbrAcAdAbrA")); // "AbrAcAdAbrA"
console.log(swap("ABRACADABRA")); // "ABRACADABRA"
console.log(swap("aBRaCaDaBRa")); // "ABRACADABRA"
