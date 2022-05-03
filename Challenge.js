// Challenge: Bingo ( Or Not ) (7 kyu)

// Description:

// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// My code below:

// Explanation: map each capital letter to its ASCII code equivalent, and then subtract 64 to obtain its order in the alphabet.
// Then, test that every code appears in array passed in to the function.
const bingo = a => ([...'BINGO'].map(letter => letter.charCodeAt(letter) - 64).every(num => a.includes(num))) ? "WIN" : "LOSE";

// Tests

console.log(bingo([1,2,3,4,5,6,7,8,9,10])); // "LOSE"
console.log(bingo([20,12,23,14,6,22,12,17,2,26])); // "LOSE"
console.log(bingo([1,2,3,7,5,14,7,15,9,10])); // "WIN"
console.log(bingo([5,2,13,7,5,14,17,15,9,10])); // "WIN"
