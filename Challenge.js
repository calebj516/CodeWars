// Challenge: Prime Numbers (7 kyu)

// Description:

// In this kata you will create a function to check a non-negative input to see if it is a prime number.

// The function will take in a number and will return True if it is a prime number and False if it is not.

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Examples(input --> output)
// 0 --> false
// 1 --> false
// 2 --> true
// 11 --> true
// 12 --> false

// My code below:

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  // Primality Test: given an input number, n, check whether it is evenly divisible by any prime number between 2 and √n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// Tests

console.log(isPrime(0)); // F
console.log(isPrime(1)); // F
console.log(isPrime(2)); // T
console.log(isPrime(11)); // T
console.log(isPrime(12)); // F
console.log(isPrime(277)); // T
console.log(isPrime(281)); // T
console.log(isPrime(283)); // T
