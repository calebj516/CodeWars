// Challenge: Ordered Count of Characters (7 kyu)

// Description:

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
  // Implement me!
  let textArr = text.split("");
  let result = [];

  let i = 0;

  while (textArr.length > 0) {
    // Push an array to result consisting of the character and the character count
    result.push([textArr[i], textArr.filter((el) => el === textArr[i]).length]);
    // filter out all occurrences of textArr[i] before the next iteration
    textArr = textArr.filter((el) => el !== textArr[i]);
  }

  return result;
};

// Tests

console.log(orderedCount("abracadabra")); // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
console.log(orderedCount("Code Wars")); // [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]
console.log(orderedCount("233312")); // [['2', 2], ['3', 3], ['1', 1 ]]
