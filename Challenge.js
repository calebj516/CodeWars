// Challenge: Square(n) Sum (8 kyu)

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// Challenge code below:

const squareSum = numbers => {
  let sum = 0, idx = 0;

  numbers.forEach((number) => {
    sum += (number ** 2);
  });

  return sum;
};

// Tests

console.log(squareSum([1, 2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50
console.log(squareSum([])); // 0
console.log(squareSum([-1, -2])); // 5
console.log(squareSum([-1, 0, 1])); // 2