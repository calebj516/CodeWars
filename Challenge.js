// Odd or Even? (7 kyu)

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

const oddOrEven = (intList) => {
  if (intList === []) {
    return [0];
  } else {
    let sum = 0;
    for (let i = 0; i < intList.length; i++) {
      sum += intList[i];
    }
    if (sum % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
};

// Tests

console.log(oddOrEven([0, 1, 4])); // odd
console.log(oddOrEven([0, 1, 4, 1])); // even
