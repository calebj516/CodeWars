// Challenge: Keep the Order (7 kyu)

// Description:

// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

// Do not modify the input.

// Some examples:
// keepOrder([1, 2, 3, 4, 7], 5) //=> 4
//                       ^(index 4)
// keepOrder([1, 2, 3, 4, 7], 0) //=> 0
//           ^(index 0)
// keepOrder([1, 1, 2, 2, 2], 2) //=> 2
//                 ^(index 2)
// Also check out my other creations — Naming Files, Elections: Weighted Average, Identify Case, Split Without Loss, Adding Fractions, Random Integers, Implement String#transpose, Implement Array#transpose!, Arrays and Procs #1, and Arrays and Procs #2.

// If you notice any issues or have any suggestions/comments whatsoever, please don't hesitate to mark an issue or just comment. Thanks!

// My code below:

const keepOrder = (arr, val) => {
  let idx = arr.findIndex(n => val <= n);
  return idx < 0 ? arr.length : idx;
}

// Logic:

// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// If -1 is returned, we know all the values in arr are greater than val, and the first index for which that is true would be 0.

// Tests

console.log(keepOrder([1, 2, 3, 4, 7], 5)); //=> 4
console.log(keepOrder([1, 2, 3, 4, 7], 0)); //=> 0
console.log(keepOrder([1, 1, 2, 2, 2], 2)); //=> 2
