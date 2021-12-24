// Challenge: Get the integers between two numbers (7 kyu)

// Description:

// Build a function that can get all the integers between two given numbers.

// Example:

// (2,9)

// Should give you this output back:

// [ 3, 4, 5, 6, 7, 8 ]

// If startNum is the same as endNum, return an empty array.

// My code below:

const range = (startNum, endNum) =>  
{  
 //code goes in here
  let result = [];
  for(let i = startNum + 1; i < endNum; i++){
    result.push(i);
  }
  return result;
};  

// Tests

console.log(range(0, 100)); // 1 to 99
console.log(range(-100, 0)); // -99 to -1
