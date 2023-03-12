// Challenge: Factorial

// Description: n/a

// My code below:

const factorial = (n) => (n >= 1 ? n * factorial(n - 1) : 1);

// Tests

console.log(factorial(6)); // 720
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
