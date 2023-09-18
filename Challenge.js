// Challenge: Find factors of a number (7 kyu)

// Description:

// Create a function that takes a number and finds the factors of it, listing them in descending order in an array.

// If the parameter is not an integer or less than 1, return -1. In C# return an empty array.

// For Example: factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]

// Challenge code below:

function factors(x){
  if(x < 1 || Number.parseInt(x) !== x) return -1;
  
  const factorList = [];
  let num = x;
  
  for(let i = x; i >= 1; i--) {
    if(num % i === 0) factorList.push(i);
  }
  
  return factorList.sort((a, b) => b - a);
}

// Tests

console.log(factors(54)); // [54, 27, 18, 9, 6, 3, 2, 1]
console.log(factors(21)); // [21, 7, 3, 1]