// Challenge: A Gift Well Spent (7 kyu)

// Description:

// Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

// Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

// My code below:

const buy = (x, arr) => {
  for(let i = 0; i < arr.length; i++){
  // set j to 1 more than i because we are comparing the sum of arr[i], and the element immediately following arr[i].
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === x){
        return [i, j];
      }
    }
  }
  return null;
}

// Tests

console.log(buy(2,[1,1])); // [0,1]
console.log(buy(3,[1,1])); // null
console.log(buy(5,[5,2,3,4,5])); // [1,2]
console.log(buy(5,[1,2,3,4,5])); // [0,3]
console.log(buy(5,[0,0,0,2,3])); // [3,4]
