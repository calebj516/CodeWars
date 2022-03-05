// Challenge: Battle of the characters (Easy) (7 kyu)

// Description:

// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Only capital characters can and will participate a battle.
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//   battle("ONE", "TWO"); // => "TWO"`
//   battle("ONE", "NEO"); // => "Tie!"

// My code below:

function battle(x, y) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let xScore = x
    .split("")
    .reduce((total, current) => total + (alphabet.indexOf(current) + 1), 0);
  let yScore = y
    .split("")
    .reduce((total, current) => total + (alphabet.indexOf(current) + 1), 0);

  return xScore > yScore ? x : xScore === yScore ? "Tie!" : y;
}

// Tests

console.log(battle("ONE", "TWO")); // "Two"
console.log(battle("ONE", "NEO")); // "Tie!"
console.log(battle("ONE", "NEO")); // "Tie!"
console.log(battle("FOO", "BAR")); // "FOO"
console.log(battle("FOUR", "FIVE")); // "FOUR"
