// Challenge: Find the unique number (6 kyu)

// Description:

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// My code below:

function findUniq(arr) {
  // initialize uniqueNum to the first element in the array
  let uniqueNum = arr[0];
  // loop through arr; if the index returned from indexOf and lastIndexOf match, we know the number is unique and does not appear more than once
  for(let i = 0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
      uniqueNum = arr[i];
      // No need to continue through the rest of arr if we find the unique number.
      break;
    }
  }
  return uniqueNum;
}

// Tests

console.log(findUniq([ 1, 0, 0 ])); // 1
console.log(findUniq([ 0, 1, 0 ])); // 1
console.log(findUniq([ 0, 0, 1 ])); // 1
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([ 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([ 3, 10, 3, 3, 3 ])); // 10
