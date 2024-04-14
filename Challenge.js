// Challenge: Sum it continuously (7 kyu)

// Description:

// Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.

// For example:

// add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like 
// this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]
// If you want to learn more see https://en.wikipedia.org/wiki/Prefix_sum

// Challenge code below:

function add(arr) {
  let sum = 0;
  return arr.map(n => sum += n);
}

// Tests

console.log(add([0])); //                             [0]
console.log(add([-33])); //                           [-33]
console.log(add([1, 2])); //                          [1, 3]
console.log(add([0, 0, 0, 0])); //                    [0, 0, 0, 0]
console.log(add([0, 3, 0, 0])); //                    [0, 3, 3, 3]
console.log(add([0, 0, 0, 3])); //                    [0, 0, 0, 3]
console.log(add([32, -9, 2, 0])); //                  [32, 23, 25, 25]

console.log(add([1, 2, 3, 4, 5])); //                 [1, 3, 6, 10, 15]
console.log(add([2, 4, 6, 8, 10])); //                [2, 6, 12, 20, 30]
console.log(add([1, 8, 27, 64, 125])); //             [1, 9, 36, 100, 225]
console.log(add([1, 4, 9, 16, 25, 36])); //           [1, 5, 14, 30, 55, 91]
console.log(add([20, 21, 22, 23, 24, 25])); //        [20, 41, 63, 86, 110, 135]

console.log(add([9, 18, 27, 36, 45, 54])); //         [9, 27, 54, 90, 135, 189]
console.log(add([6, 12, 18, 24, 30, 36, 42])); //     [6, 18, 36, 60, 90, 126, 168]
console.log(add([5, 10, 15, 20, 25, 30, 35, 40])); // [5, 15, 30, 50, 75, 105, 140, 180]
console.log(add([7, 14, 21, 28, 35, 42, 49, 56])); // [7, 21, 42, 70, 105, 147, 196, 252]
console.log(add([8, 16, 24, 32, 40, 48, 56, 64])); // [8, 24, 48, 80, 120, 168, 224, 288]
