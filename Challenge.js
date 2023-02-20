// Challenge: Hamming Distance (6 kyu)

// Description:

// The hamming distance between a pair of numbers is the number of binary bits that differ in their binary notation.

// Example
// For a = 25, b = 87, the result should be 4

// 25: 00011001
// 87: 01010111
// The hamming distance between these two would be 4 ( the 2nd, 5th, 6th, 7th bit ).

// Input/Output
// [input] integer a
// First Number. 1 <= a <= 2^20

// [input] integer b
// Second Number. 1 <= b <= 2^20

// [output] an integer
// Hamming Distance

// My code below:

const hammingDistance = (a, b) =>
  (a ^ b)
    .toString(2)
    .split("")
    .filter((n) => n !== "0").length;

// Notes:

// The bitwise XOR (^) operator returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR

// n.toString(2) converts an int to its binary equivalent

// Tests

console.log(hammingDistance(25, 87)); // 4
console.log(hammingDistance(256, 302)); // 4
console.log(hammingDistance(543, 634)); // 4
console.log(hammingDistance(34013, 702)); // 7
