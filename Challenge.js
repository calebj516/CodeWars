// Challenge: Is n divisible by (...)? (7 kyu)

// Description:

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// My code below:

function isDivisible(){
  // make use of the arguments object paired with the Object values method to create an array containing all arguments passed in
  const nums = Object.values(arguments);
  // divisor is the first number
  const divisor = nums[0];  
  // use the every method which returns true if and only if all elements of the array pass the test
  return nums.every(num => divisor % num === 0);
}

// Tests

console.log(isDivisible(3,3,4)); // false
console.log(isDivisible(12,3,4)); // true
console.log(isDivisible(8,3,4,2,5)); // false
console.log(isDivisible(48,3,4,2)); // true
console.log(isDivisible(100,5,10,20,25)); // true
console.log(isDivisible(100,5)); // true
console.log(isDivisible(4,4,2,4,4,4,4,4,4)); // true
console.log(isDivisible(5,2)); // false
console.log(isDivisible(17,17,17,17)); // true
console.log(isDivisible(17,1)); // true
