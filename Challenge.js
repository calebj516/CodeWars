// Challenge: Sum of odd numbers (7 kyu)

// Description:

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// My code below:

const rowOddSumNumbers = n => n ** 3;

// Tests

console.log(rowOddSumNumbers(1)); // 1
console.log(rowOddSumNumbers(42)); // 74088