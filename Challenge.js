// Challenge: Break camelCase (6 kyu)

// Description:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// My Code Below

// complete the function
function solution(string) {
  let arr = string.split("");
  let pos = [];
  // Use regular expression to test each character
  for (let i = 0; i < arr.length; i++) {
    if (/[A-Z]/.test(arr[i])) {
      pos.push(i);
    }
  }
  // Splice method used on line 33 throws off positioning of index.
  // This loop will add to each element the index of the element (not including the first one) to fix this.
  if (pos.length >= 2) {
    for (let i = 1; i < pos.length; i++) {
      pos[i] += i;
    }
  }
  // See comments on lines 23 and 24.
  if (pos !== []) {
    for (let i = 0; i < pos.length; i++) {
      arr.splice(pos[i], 0, " ");
    }
  }
  // Return a string by using the join method.
  return arr.join("");
}

// Tests below

console.log(solution("camelCaseTest")); // result should be: camel Case Test
console.log(solution("oneGiantTastyBurger")); // result should be: one Giant Tasty Burger
