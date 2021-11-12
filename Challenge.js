// Challenge: Merge Two Arrays (7 kyu)

// Description:

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
// Inspired by https://adriann.github.io/programming_problems.html

// My code below:

const mergeArrays = (a, b) => {
  // array to hold final result
  let newArr = [];
  // Determine which array is longer and then store the length to use in the for loop later on
  let len = a.length > b.length ? a.length : b.length;

  for (let i = 0; i < len; i++) {
    // if the value in array a is truthy, push it to the new array
    if (a[i]) {
      newArr.push(a[i]);
    }
    // if the value in array b is truthy, push it to the new array
    if (b[i]) {
      newArr.push(b[i]);
    }
  }
  // return final result
  return newArr;
};

// Tests below:

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"])); // [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]

console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])); // ["a",1,"b",2,"c",3,"d",4,"e",5
