// Challenge: Count the Monkeys! (8 kyu)

// Description:

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n); // but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n); // populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

// Challenge code below:

function monkeyCount(n) {
  return [...Array(n)].map((_, i) => i + 1);
}

// Tests

console.log(monkeyCount(5)); // [1, 2, 3, 4, 5]
console.log(monkeyCount(3)); // [1, 2, 3]
console.log(monkeyCount(9)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(monkeyCount(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(monkeyCount(20)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]