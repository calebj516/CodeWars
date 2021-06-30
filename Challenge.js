// Challenge: String ends with? (7 kyu)

// Instructions:

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// My Code Below

function solution(str, ending) {
  // Turn str and ending into arrays and reverse them
  let strArr = str.split("").reverse();
  let endingArr = ending.split("").reverse();
  // loop through strArr, reversed, up to the length of endingArr
  for (let i = 0; i < endingArr.length; i++) {
    if (endingArr[i] !== strArr[i]) {
      return false;
    }
  }
  return true;
}

// Tests below

console.log(solution("abc", "bc")); // returns true
console.log(solution("abc", "d")); // returns false
console.log(solution("Codewars", "wars")); // returns true
