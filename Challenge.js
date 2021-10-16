// Challenge: Alphabetical Addition (7 kyu)

// Description:
// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'

// My code below:

function addLetters(...letters) {
  if (letters.length === 0) {
    return "z";
  }

  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let total = 0;

  // determine value of each letter
  for (let i = 0; i < letters.length; i++) {
    // add 1 to index to obtain the correct value since value starts at a = 1
    total += alphabet.indexOf(letters[i]) + 1;
  }
  // Logic to handle overflow
  while (total > alphabet.length) {
    total -= alphabet.length;
  }
  // return value - 1 to obtain the correct index (value starts at a = 1, so an offset is needed)
  return alphabet[total - 1];
}

// Tests below:

console.log(addLetters("a", "b", "c")); // f
console.log(addLetters("z")); // z
console.log(addLetters("a", "b")); // c
console.log(addLetters("c")); // c
console.log(addLetters("z", "a")); // a
console.log(addLetters("y", "c", "b")); // d
console.log(addLetters()); // z
