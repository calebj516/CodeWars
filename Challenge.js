// Challenge: Beginner Series #1 School Paperwork (8 kyu)
// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

// Description:

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:

// n= 5, m=5: 25
// n=-5, m=5:  0

// Waiting for translations and Feedback! Thanks!

// Challenge code below:

const paperwork = (n, m) => n < 0 || m < 0 ? 0 : m * n;

// Tests

console.log(paperwork(5, 5)); // 25
console.log(paperwork(5, -5)); // 0
console.log(paperwork(-5, -5)); // 0
console.log(paperwork(5, 0)); // 0
console.log(paperwork(5, 11)); // 55