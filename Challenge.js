// Split Strings Challenge - 6 kyu

// solution("abc"); // should return ['ab', 'c_']
// solution("abcdef"); // should return ['ab', 'cd', 'ef']

const solution = (str) => {
  // if there is no input, return empty array.
  if (!str) {
    return [];
  }
  // declare empty array to store results
  let arr = [];
  // test if the string length is even or odd
  // if odd, append an underscore to the end of str
  if (str.length % 2 !== 0) {
    str += "_";
  }
  // this do while loop will push pairs from str into arr while index is less than str length
  // first iteration: str[0] + str[1]
  // second iteration i+2 = 0+2: str[2] + str[3]...
  let i = 0;
  do {
    arr.push(`${str[i] + str[i + 1]}`);
    i += 2;
  } while (i < str.length);
  return arr;
};

// Tests
console.log(solution("abc"));
console.log(solution("abcdef"));
