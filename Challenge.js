// Challenge: Prime Number? (7 kyu)

// Description:

// Determine if a given number is prime

// My code below:

const isPrimeNumber = (num) => {
  const limit = Math.sqrt(num);

  for (let i = 2; i <= limit; i++) {
    if (!(num % i)) return false;
  }

  return num > 1;
};

// Tests

console.log(isPrimeNumber(10000)); // F
console.log(isPrimeNumber(1223)); // T
console.log(isPrimeNumber(769)); // T
