// Challenge: Printing Array elements with Comma delimiters (8 kyu)

// Description:

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

// Challenge code below:

const printArray = array => array.join();

// Tests

// array1 = ["hello", "this", "is", "an", "array!"]
// array2 = [1, 2, 3, 4, 5]

console.log(printArray(["hello", "this", "is", "an", "array!"])); // hello,this,is,an,array!
console.log(printArray([1, 2, 3, 4, 5])); // 1,2,3,4,5