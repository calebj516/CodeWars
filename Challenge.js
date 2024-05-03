// Challenge: Evens times last (7 kyu)

// Description:

// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL)); // multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// Challenge code below:

function evenLast(numbers) {
  return (numbers[numbers.length - 1] || 0) * numbers.reduce((total, current, i) => i % 2 == 0 ? total + current : total + 0, 0);
}

// Tests
 
console.log(evenLast([2, 2, 2, 2])); // 8
console.log(evenLast([])); // 0
console.log(evenLast([1, 3, 3, 1, 10])); // 140
console.log(evenLast([2, 3, 4, 5])); // 30