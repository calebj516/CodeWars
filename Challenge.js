// Challenge: Larger Product or Sum (7 kyu)

// Description:

// For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.

// If the sum of the n largest numbers is higher, return "sum"
// If the product of the n smallest numbers is higher, return "product"
// If the 2 values are equal, return "same"

// Note The array will never be empty and n will always be smaller than the length of the array.

// My code below:

const sumOrProduct = (array, n) => {
  // sort the array in ascending order. 
  array.sort((a, b) => a - b);
  // calculate largest and smallest using array reduce
  let largest = array.slice(-n).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  let smallest = array.slice(0, n).reduce((previousValue, currentValue) => previousValue * currentValue, 1);
  // return value determined using nested ternary 
  return largest > smallest ? "sum" : largest < smallest ? "product" : "same";
}

// Tests below:
console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)); // "sum"
console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3)); // "product"
console.log(sumOrProduct([10, 20, 3, 30, 5, 4], 3)); // "same"
