// Challenge: Beginner Series #2 Clock (8 kyu)

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/javascript

// Description:

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// Challenge code below:

const past = (h, m, s) => (3600000 * h) + (60000 * m) + (1000 * s);

// Tests

console.log(past(0,1,1)); // 6100
console.log(past(1,1,1)); // 3661000
console.log(past(0,0,0)); // 0
console.log(past(1,0,1)); // 3601000
console.log(past(1,0,0)); // 3600000