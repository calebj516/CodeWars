// Challenge: Count by X (8 kyu)

// Description:

// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// My code below:

function countBy(x, n) {

  let z = [];
  let max = x * n;
  
  // start at x, work up to and including the maximum value of x which will be the multiple x multiplied by n, and increment each iteration by the value of the multiple x
  for(let i = x; i <= max; i += x){
    z.push(i);
  }
  
  return z;
}

// Tests

console.log(countBy(1,10)); // [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2,5)); // [2,4,6,8,10]
console.log(countBy(3,7)); // [3,6,9,12,15,18,21]
console.log(countBy(50,5)); // [50,100,150,200,250]
console.log(countBy(100,6)); // [100,200,300,400,500,600]
