// Challenge: Array2Binary addition (7 kyu)

// Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

// If the array contains any non-integer element (e.g. an object, a float, a string and so on) , return false.

// Note: The sum of an empty array is zero.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == false

// Challenge code below:

const arr2bin = (arr) => arr.every(num => typeof num  == 'number') && arr.reduce((x, y) => x + y, 0).toString(2);

// Tests

console.log(arr2bin([1,'a',2])); //false
console.log(arr2bin([1,[],2])); //false
console.log(arr2bin(['a',[],2])); //false
console.log(arr2bin(['a', [], {}])); // false

console.log(arr2bin([1,2])); // "11"
console.log(arr2bin([1,2,3,4,5])); // "1111"
console.log(arr2bin([1,10,100,1000])); // "10001010111"
console.log(arr2bin([1,2,-1,-2])); // "0"
console.log(arr2bin([1,2,-1,-2,1])); // "1"