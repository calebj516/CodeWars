// Challenge: Reverse list (7 kyu)

// Description:

// Write reverseList function that simply reverses lists.

// My code below (solved without using array reverse method):

function reverseList(arr) {

    const reversedArr = [];
    
    if(arr.length > 0){
      
      for(let i = arr.length - 1; i >= 0; i--){
        reversedArr.push(arr[i]);
      }
      
      return reversedArr;
    }
  
    return [];
}

// Tests

console.log(reverseList([])); //  []
console.log(reverseList([1,2,3])); //  [3,2,1]
console.log(reverseList([1,2,3,4])); //  [4,3,2,1]
console.log(reverseList([1,2,3,4,5])); //  [5,4,3,2,1]
