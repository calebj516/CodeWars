// Challenge: Unique In Order (6 kyu)

// Instructions:

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// My code below:

const uniqueInOrder = (iterable) => {
  let result = [];

  // loop through string
  // If i is not equal to i  1, push to result

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      result.push(iterable[i]);
    }
  }

  return result;
};

// Tests below:

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ["A", "B", "C", "D", "A", "B"]
console.log(uniqueInOrder("ABBCcAD")); // ["A", "B", "C", "c", "A", "D"]
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3]
