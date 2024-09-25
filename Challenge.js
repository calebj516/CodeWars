// Challenge: Sum of Array Averages (7 kyu)

// Description:

// Program a function sumAverage(arr) where arr is an array containing arrays full of numbers.

// First, determine the average of each array. Then, return the sum of all the averages.

// All numbers will be less than 100 and greater than -100.
// arr will contain a maximum of 50 arrays.
// After calculating all the averages, add them all together, then round down, as shown in the example below:
// The example given: sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), the answer being 44.

// Calculate the average of each individual array:
// [3, 4, 1, 3, 5, 1, 4] = (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 = 3
// [21, 54, 33, 21, 77] = (21 + 54 + 33 + 21 + 77) / 5 = 41.2
// Add the average of each array together:
// 3 + 41.2 = 44.2
// Round the final average down:
// floor(44.2) = 44

// Challenge code below:

const sumAverage = (arr) => {
  let averages = [];
  let total = 0, average = 0;
  
  for(let i = 0; i < arr.length; i++) {
    
    for(let j = 0; j < arr[i].length; j++) {
      total += arr[i][j];
    }
    
    average = total / arr[i].length;
    averages.push(average);
    average = 0;
    total = 0;
  }                          

  
  return Math.floor(averages.reduce((total, current) => total + current));
}

// Tests

console.log(sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]])); // 3
console.log(sumAverage([[52, 64, 84, 21, 54], [44, 87, 46, 90, 43]])); // 117
console.log(sumAverage([[44, 76, 12], [96, 12, 34, 53, 76, 34, 56, 86, 21], [34, 65, 34, 76, 34, 87, 34]])); // 148
console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 76]])); // 44
console.log(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]])); // -6