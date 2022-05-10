// Challenge: Odd-heavy Array (6 kyu)

// Description:

// An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

// eg.

// Array [11,4,9,2,8] is odd-heavy 
// because:- its odd elements [11,9] are greater than all the even elements [4,2,8]

// Array [11,4,9,2,3,10] is not odd-heavy
// because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
// write a function called isOddHeavy or is_odd_heavy that accepts an integer array and returns true if the array is odd-heavy else return false.

// My code below:

function isOddHeavy(n){
  
  // create two arrays, one for even values and another for odd values
  let evenArr = n.filter(num => num % 2 === 0);
  let oddArr = n.filter(num => num % 2 !== 0);
  // variable to hold number from even array
  let evenNum = 0;
  
  // if there are no odd values to compare, return false
  if(oddArr.length === 0){
    return false;
  }
  
  // If there are contents in the even array, compare it to the odd array
  if(evenArr.length > 0){
    for(let i = 0; i < evenArr.length; i++){
      // obtain even value to compare
      evenNum = evenArr[i];
      // compare the even value to each odd value
      for(let j = 0; j < oddArr.length; j++){
        if(evenNum > oddArr[j]){
          return false;
        }
      }
    }   
  }
  
  // At this point we know the array is odd heavy because no even value has been found to be greater than any odd value.
  return true;
}

// Tests

console.log(isOddHeavy([0,2,19,4,4])); // true
console.log(isOddHeavy([1,-2,-1,2])); // false
console.log(isOddHeavy([-3,2,1,3,-1,-2])); // false
console.log(isOddHeavy([3,4,-2,-3,-2])); // false
console.log(isOddHeavy([-1,1,-2,2,-2,-2,-4,4])); // false 
console.log(isOddHeavy([-1,-2,21])); // true 
