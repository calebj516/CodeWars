// Challenge: Battle of the characters (Medium) (7 kyu)

// Description:

// Groups of characters decided to make a battle. Help them to figure out what group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

// Rules:
// Each character has its own power:
//   A = 1, B = 2, ... Y = 25, Z = 26
//   a = 0.5, b = 1, ... y = 12.5, z = 13
// Only alphabetical characters can and will participate in a battle.
// Only two groups to a fight.
// Group whose total power (a + B + c + ...) is bigger wins.
// If the powers are equal, it's a tie.

// Examples:
//   battle("One", "Two"); // => "Two"`
//   battle("ONE", "NEO"); // => "Tie!"

// My code below:

function battle(x, y) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Logic: use reduce to determine each character's value and reduce the values into one sum. Compare the two values and determine the result.
  // Inside the reduce: if the current char is located in alphabet, we know it is uppercase. The value is determined by returning the index and adding one to offset it correctly. Otherwise, it is lowercase and we take the same value as if it were uppercase, but divide by two.
  let xScore = x
    .split("")
    .reduce(
      (total, current) =>
        total +
        (alphabet.indexOf(current) !== -1
          ? alphabet.indexOf(current) + 1
          : (alphabet.indexOf(current.toUpperCase()) + 1) / 2),
      0
    );
  let yScore = y
    .split("")
    .reduce(
      (total, current) =>
        total +
        (alphabet.indexOf(current) !== -1
          ? alphabet.indexOf(current) + 1
          : (alphabet.indexOf(current.toUpperCase()) + 1) / 2),
      0
    );
  // This statement uses ternary operators to determine which value is greater, or if there is a tie.
  return xScore > yScore ? x : xScore === yScore ? "Tie!" : y;
}

// Tests

console.log(battle("One", "Two")); // "Two"
console.log(battle("One", "Neo")); // "One"
console.log(battle("One", "neO")); // "Tie!"
console.log(battle("Foo", "BAR")); // "Tie!"
console.log(battle("Four", "Five")); // "Four"
