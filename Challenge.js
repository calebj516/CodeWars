// Challenge: Sort Numbers (7 kyu)

// Description:

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
  // if nums is truthy, sort it; otherwise, return an empty array.
  return nums ? nums.sort((num1, num2) => num1 - num2) : [];
}

// Tests
console.log(solution([1,2,3,10,5])); // [1,2,3,5,10]
console.log(solution(null)); // []
console.log(solution([])); // []
console.log(solution([20, 2, 10])); // [2,10,20]
console.log(solution([2, 20, 10])); // [2,10,20]
