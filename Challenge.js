// Challenge: Calculate Greatest Common Denominator

// Description: n/a

// My code below:

function calcGcd(a, b) {
  if (b != 0) {
    return calcGcd(b, a % b);
  } else {
    return a;
  }
}

// Tests

console.log(calcGcd(108, 48)); // 12
console.log(calcGcd(632, 150)); // 2
console.log(calcGcd(256, 60)); // 4
