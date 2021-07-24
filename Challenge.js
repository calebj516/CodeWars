// Challenge: Street Fighter 2 - Character Selection (6 kyu)

// Instructions:

// Short Intro

// Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.

// Can you solve this kata? Suuure-You-Can!

// UPDATE: a new kata's harder version is available here.

// The Kata

// You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid.

// Selection Grid Layout in text:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
// Input

// the list of game characters in a 2x6 grid;
// the initial position of the selection cursor (top-left is (0,0));
// a list of moves of the selection cursor (which are up, down, left, right);

// Output

// the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);

// Rules

// Selection cursor is circular horizontally but not vertically!

// As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

// Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

// Test

// For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

// Notice: changing some of the input data might not help you.

// My code below:

function streetFighterSelection(fighters, position, moves) {
  var result = [];

  moves.map(
    (processMoves = (move) => {
      if (move === "up") {
        position[0] = 0; // position [0] is the vertical position. 0 is the uppermost array. The only possible change produced from an up move is to the uppermost array, array 0.
      } else if (move === "down") {
        position[0] = 1; // The only possible change produced from a down move is to the lowermost array, array 1.
      } else if (move === "right") {
        position[1] = position[1] === 5 ? 0 : position[1] + 1; // position[1] is the horizontal position. If it is the last element at index 5, change it to the first element if the move is to the right. Otherwise add one (move to the right)
      } else if (move === "left") {
        position[1] = position[1] === 0 ? 5 : position[1] - 1; // If the horizontal position is at the first element at index 0, change it to the last element if the move is to the left. Otherwise subtract one (move to the left)
      }
      result.push(fighters[position[0]][position[1]]); // push the result of the vertical and horizontal value plugged into the fighters array to the result array.
    })
  );

  return result;
}

// Tests below:

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];

// Test 1: should work with few moves

moves = ["up", "left", "right", "left", "left"];
console.log(streetFighterSelection(fighters, [0, 0], moves)); // ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']

// Test 2: should work with no selection cursor moves

moves = [];
console.log(streetFighterSelection(fighters, [0, 0], moves)); // []

// Test 3: should work when always moving left

moves = ["left", "left", "left", "left", "left", "left", "left", "left"];
console.log(streetFighterSelection(fighters, [0, 0], moves));
// [
//   "Vega",
//   "Balrog",
//   "Guile",
//   "Blanka",
//   "E.Honda",
//   "Ryu",
//   "Vega",
//   "Balrog",
// ]
