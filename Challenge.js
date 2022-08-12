// Challenge: Sum of the first nth term of Series (7 kyu)

// Description:

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)

// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// My code below:

function SeriesSum(n) {
  let result = [];

  // increment i by three each iteration and therefore up to n * 3 times
  for (let i = 1; i <= n * 3; i += 3) {
    result.push(1 / i);
  }

  return result.reduce((total, current) => total + current, 0).toFixed(2);
}

// Tests

console.log(SeriesSum(1)); // 1.00
console.log(SeriesSum(2)); // 1.25
console.log(SeriesSum(5)); // 1.57
