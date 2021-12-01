// Challenge: Sum of array singles (7 kyu)

// Description:

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

// My code below:

function repeats(arr){
  // Filter for the elements that occur only once with array filter, and then total them up with array reduce
  return arr.filter(x => arr.filter(y => y === x).length === 1).reduce((prev, current) => prev + current);
};

// Tests below:
console.log(repeats([4,5,7,5,4,8])); // 15
console.log(repeats([9, 10, 19, 13, 19, 13])); // 19
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])); // 12