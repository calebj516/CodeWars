// Challenge: Filter Unused Digits (7 kyu)

// Description:

// Given a list of integers, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

// My code below:

function unusedDigits(...args){
  // Here we are constructing a regular expression by passing in the arguments to the RegExp object's constructor,
  // surrounded by brackets, with 'g' for global as the flag.
  // This is used as the first argument in replace; the second argument, '', will remove all matches.
  // Taken together, this has the effect of matching all occurrences of the numbers in the list of integers, and removing them
  return "0123456789".replace(new RegExp('['+args.join('')+']','g'), '')
}

// Tests

console.log(unusedDigits([12, 34, 56, 78])); // "09"
console.log(unusedDigits([2015, 8, 26])); //"3479"
console.log(unusedDigits([276, 575])); // "013489"
console.log(unusedDigits([643])); // "0125789"
console.log(unusedDigits([864, 896, 744])); // "01235"
console.log(unusedDigits([364, 500, 715, 730])); // "289"
console.log(unusedDigits([93, 10, 11, 40])); // "25678"
console.log(unusedDigits([])); // "0123456789"
console.log(unusedDigits([1, 11, 111, 1111])); // "023456789"
console.log(unusedDigits([9, 87, 654, 3210])); // ""
