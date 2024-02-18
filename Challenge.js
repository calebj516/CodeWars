// Challenge: Gravity Flip (8 kyu)

// Description:

// If you've completed this kata already and want a bigger challenge, here's the 3D version

// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+
// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

// Examples (input -> output:
// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

// Challenge code below:

const flip=(d, a)=>{
  return a.sort((a, b) => d == 'R' ? a - b : b - a);
}

// Tests

console.log(flip('R', [4, 5, 6, 7, 1])); // [1, 4, 5, 6, 7]
console.log(flip('L', [3, 0, 9, 8, 1, 2])); // [9, 8, 3, 2, 1, 0]
console.log(flip('L', [0, 0, 12, 0, 1])); // [12, 1, 0, 0, 0]
console.log(flip('R', [13, 2, 4, 7, 93])); // [2, 4, 7, 13, 93]
console.log(flip('R', [5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]