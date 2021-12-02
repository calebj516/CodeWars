// Challenge: Odd/Even number of divisors (7 kyu)

// Description:

// Given an integer n return "odd" if the number of its divisors is odd. Otherwise return "even".

// Note: big inputs will be tested.

// Examples:

// All prime numbers have exactly two divisors (hence "even").

// For n = 12 the divisors are [1, 2, 3, 4, 6, 12] – "even".

// For n = 4 the divisors are [1, 2, 4] – "odd".

// My code below:

const oddity = n => {
  // only perfect squares have an odd number of divisors. Example: 16 has 1, 2, 4, 8, and 16, a total of 5.
  // Note: raising a number to the 0.5 power is the same as taking the square root of the number.
  return (n ** 0.5) % 1 === 0 ? "odd" : "even";
}

// Tests below:
Console.log(oddity(1)); // 'odd'
Console.log(oddity(5)); // 'even'
Console.log(oddity(16)); // 'odd'
Console.log(oddity(27)); // 'even'
Console.log(oddity(121)); // 'odd'