// Challenge: Beginner Series #3 Sum of Numbers (7 kyu)

// Description:

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// My code below:

const getSum = (a, b) => {
  let total = 0;
  // Determine which between a and b are the largest and smallest numbers
  let bigger = a > b ? a : b;
  let smaller = a > b ? b : a;
  // starting with the smallest, loop our way up to and including the largest number, adding each element to the total
  for (let i = smaller; i <= bigger; i++) {
    total += i;
  }

  return total;
};

// Tests below:
console.log(getSum(5, -1)); // 14
console.log(getSum(505, 4)); // 127759
console.log(getSum(321, 123)); // 44178
console.log(getSum(-50, 0)); // -1275
console.log(getSum(-1, -5)); // -15
console.log(getSum(-5, -5)); // -5
