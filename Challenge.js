// Challenge: Playing with Sets: Equal or Not? (7 kyu)

// Description:

// Set objects are new JavaScript built-in objects defined since ECMAScript 2015

// A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

// Equality

// Two sets ( A, B ) are considered "equal" if all elements of A are elements of B and all elements of B are elements of A no matter "order" of elements.

// Examples:
//   {1, 2} == {2, 1}
//   {1, 2} != {1, 2, 3}
// Task
// Create 2 functions, areEqual and notEqual, getting 2 sets as arguments and returning a true or false depending if these 2 sets are "equal" (respectively not equal) ie : if all elements of 1st set are elements of 2d and all elements of 2d set are elements of 1st.

// Examples:
// A  = new Set([1,2]);
// A2 = new Set([2,1]);
// B  = new Set([2,3]);

// areEqual(A,B)  // -> false
// areEqual(A,A2) // -> true
// notEqual(A,B)  // -> true
 

// " May the Code be with you ! "

// My code below:

function areEqual(s1, s2) {
  // Take the result of the notEqual function and reverse the logic:
  // If notEqual returns true, s1 and s2 are not equal so we need areEqual to return false
  return !notEqual(s1, s2);
}

function notEqual(s1, s2) {
  // If the lengths are different we know s1 != s2
  if(s1.length != s2.length) return true;
  
  let s1Arr = Array.from(s1);
  let s2Arr = Array.from(s2);
  
  // Loop through s1. If s2 does not contain any value from s1, s1 != s2
  for(let num of s1Arr) {
    if(!s2Arr.includes(num)) return true;
  }
  // Loop through s2. If s1 does not contain any value from s2, s1 != s2
  for(let num of s2Arr) {
    if(!s1Arr.includes(num)) return true;
  }
  // If we get to this point, we have established that every value in each set is within the other set. The two sets are NOT equal.
  return false;
}

// Tests

let A1 = new Set([1,2,3]), A2 = new Set([3,2,1]), B = new Set([1,2,5]), D = new Set(["1","2","3"]);
  
console.log(areEqual(A1, A1)); // "A == A" True
console.log(areEqual(A1, A2)); // "{1,2,3} == {3,2,1}" True
console.log(areEqual(A2, A1)); // "{3,2,1} == {1,2,3}" True
console.log(areEqual(A1, B)); // "{1,2,3} != {1,2,5}" False
console.log(areEqual(A1, D)); // "{1,2,3} != {'1','2','3'}" False
