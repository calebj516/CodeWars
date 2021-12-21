// Challenge: Are there doubles? (7 kyu)

// Description:

// Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or .

// You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.

// Examples:

//   doubleCheck("abca")
//   returns false
  
//   doubleCheck("aabc")
//   returns true
  
//   doubleCheck("a 11 c d")
//   returns true
  
//   doubleCheck("AabBcC")
//   returns true
  
//   doubleCheck("a b  c")
//   returns true
  
//   doubleCheck("a b c d e f g h i h k")
//   returns false
  
//   doubleCheck("2020")
//   returns false
  
//   doubleCheck("a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~")
//   returns false

// My code below:

  // The some() method tests whether at least one element in the array passes the test implemented by the provided function. If so, it returns true.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  // some((element, index, array) => { /* ... */ } )

function doubleCheck(str){
  // change all characters in str to lowercase, then split into an array and use some()
  return str.toLowerCase().split('').some((c, i, arr) => c === arr[i + 1]);
}

// Tests

console.log(doubleCheck("abca")); //   returns false
console.log(doubleCheck("aabc")); //   returns true
console.log(doubleCheck("a 11 c d")); //   returns true
console.log(doubleCheck("AabBcC")); //   returns true
console.log(doubleCheck("a b  c")); //   returns true
console.log(doubleCheck("a b c d e f g h i h k")); //   returns false
console.log(doubleCheck("2020")); //   returns false
console.log(doubleCheck("a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~")); //   returns false
