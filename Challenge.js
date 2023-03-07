// Challenge: Is A Number Prime? (6 kyu)

// Description:

// Determine if a given number is prime

// My code below:

const isPrimeNumber = (num) => {
  const limit = Math.sqrt(num);
  let i = 2;

  while (i <= limit) {
    if (!(num % i)) return false;
    i++;
  }

  return num > 1;
};

// Tests

console.log(isPrimeNumber(10000)); // F
console.log(isPrimeNumber(1223)); // T
console.log(isPrimeNumber(769)); // T
