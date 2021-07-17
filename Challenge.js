// Challenge: Are They The Same? (6 kyu)

// Instructions:

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp may not return true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, Elixir, Haskell, PureScript, Pascal, R, Rust, Shell).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.

// My code below:

function comp(array1, array2) {
  // If neither array is null, proceed.
  if (array1 !== null && array2 !== null) {
    // Sort both arrays to prepare for comparison of each element.
    let array1Sorted = array1.sort((a, b) => a - b);
    let array2Sorted = array2
      .map((num) => Math.sqrt(num))
      .sort((a, b) => a - b);
    // compare each element in both arrays.
    for (let i = 0; i < array1.length; i++) {
      // If the corresponding elements are not equivalent, return false.
      if (array1Sorted[i] !== array2Sorted[i]) {
        return false;
      }
    }
    // If we are able to exit the for loop, we know that all elements are true. Return true.
    return true;
  }
  // If we are able to exit the if statement checking that both arrays are not null, we know at least one is null. Return false.
  return false;
}

// Tests below:

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
); // true
console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
  )
); // false
