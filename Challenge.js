// Challenge: Narcissistic Numbers (7 kyu)

// Description:

// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.

// My code below:

// Compare n to the result of n converted to a string, split into an array, changing each digit into a number, and using reduce to sum the result of each digit raised to the power of the length of the array.

const isNarcissistic = n => n == n.toString().split('').map(Number).reduce((total, currentNum, idx, arr) => total + currentNum ** arr.length, 0);

// Tests
console.log(isNarcissistic(234229983));       // false
console.log(isNarcissistic(9926315));         // true
console.log(isNarcissistic(24678050));        // true
console.log(isNarcissistic(88593477));        // true
console.log(isNarcissistic(11513221922401));  // false
