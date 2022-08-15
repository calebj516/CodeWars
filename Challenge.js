// Challenge: Sum of a sequence (7 kyu)

// Description:

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

// This is the first kata in the series:

// Sum of a sequence (this kata)
// Sum of a Sequence [Hard-Core Version]

// My code below:

const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;

  let result = [];

  for (let i = begin; i <= end; i += step) {
    result.push(i);
  }

  return result.reduce((total, current) => total + current, 0);
};

// Tests

console.log(sequenceSum(2, 6, 2)); // 12
console.log(sequenceSum(1, 5, 1)); // 15
console.log(sequenceSum(1, 5, 3)); // 5
console.log(sequenceSum(0, 15, 3)); // 45
console.log(sequenceSum(16, 15, 3)); // 0
console.log(sequenceSum(2, 24, 22)); // 26
