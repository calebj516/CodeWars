// Challenge: Return the closest number multiple of 10 (7 kyu)

// Description:

// Given a number return the closest number to it that is divisible by 10.

// Example input:

// 22
// 25
// 37

// Expected output:

// 20
// 30
// 40

// My code below:

const closestMultiple10 = (num) => Math.round(num / 10) * 10;

// Tests

console.log(closestMultiple10(22)); // 20
console.log(closestMultiple10(25)); // 30
console.log(closestMultiple10(37)); // 40
