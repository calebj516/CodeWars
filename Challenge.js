// Challenge: Powers of 2 (8 kyu)

// Description:

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Challenge code below:

function powersOfTwo(n){
  const nums = [];
  
  for(let i = 0; i <= n; i++) {
    nums.push(2 ** i);
  }
  
  return nums;
}

// Tests

console.log(powersOfTwo(0)); // [1]
console.log(powersOfTwo(1)); // [1, 2]
console.log(powersOfTwo(4)); // [1, 2, 4, 8, 16]