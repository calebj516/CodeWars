// Challenge: Max Diff (7 kyu)

// Description:

// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted

// My code below:

function maxDiff(list) {
  
    if(list.length > 1){
      let sortedList = list.sort((firstNum, secondNum) => firstNum - secondNum);
      return sortedList[sortedList.length - 1] - sortedList[0];
    }
    
    return 0;
  };

// Tests

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])); // 6
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])); // 11
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16])); // 16
console.log(maxDiff([16])); // 0
console.log(maxDiff([])); // 0
