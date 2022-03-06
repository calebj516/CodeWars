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
  let xScore = 0,
    yScore = 0;

  for (let i = 0; i < x.length; i++) {
    // ASCII code # for capital letters start at 65, so subtracting 64 obtains the score
    xScore += x[i].charCodeAt(0) - 64;
  }

  for (let i = 0; i < y.length; i++) {
    yScore += y[i].charCodeAt(0) - 64;
  }

  return xScore > yScore ? x : xScore < yScore ? y : "Tie!";
}

// Tests

console.log(battle("ONE", "TWO")); // "Two"
console.log(battle("ONE", "NEO")); // "Tie!"
console.log(battle("ONE", "NEO")); // "Tie!"
console.log(battle("FOO", "BAR")); // "FOO"
console.log(battle("FOUR", "FIVE")); // "FOUR"
