// Challenge: Array.diff (6 kyu)

// Instructions:

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// My code below:

function arrayDiff(a, b) {
  
  // return numbers from a that are not in b.
  return a.filter(n => b.indexOf(n) < 0);
  
}

// Tests below:

console.log(arrayDiff([1,2],[1])); // [2]
console.log(arrayDiff([1,2,2,2,3],[2])); // [1, 3]