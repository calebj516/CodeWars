// Challenge: Find the capitals (7 kyu)

// Description:

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// My code below:

const capitals = (word) => {
  const result = []; 
  
  word.split('').forEach((letter, i) => letter.charCodeAt(0) <= 90 ? result.push(i) : letter); 
  return result;
};

// Tests

console.log(capitals('CodEWaRs')); // [0,3,4,6]
console.log(capitals('cOdEwArS')); // [1,3,5,7]