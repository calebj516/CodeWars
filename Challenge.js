// Challenge: Give Me A Diamond (6 kyu)

// Instructions:

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

// My code below:

function diamond(n) {
  // Declare an array to hold the results
  let result = [];
  // If n is odd or less than zero, return null
  if (n % 2 === 0 || n <= 0) {
    return null;
    // Otherwise, proceed with the challenge since n is odd.
  } else {
    let asterisk = "*";
    let space = " ";
    let count = 0;
    let i = 1;
    let num = n;
    // This while loop counts the number of times it takes to get to 1 from n.
    // This will be used to determine the number of spaces to add in front of the newline character.
    while (num > 1) {
      num -= 2;
      count += 1;
    }
    // This while loop adds spaces and asterisks up to n
    while (i < n) {
      result.push(space.repeat(count) + asterisk.repeat(i) + "\n");
      i += 2;
      count -= 1;
    }
    // This while loop adds spaces and asterisks down from n to 1
    while (i >= 1) {
      result.push(space.repeat(count) + asterisk.repeat(i) + "\n");
      i -= 2;
      count += 1;
    }
    // Return string
    return result.join("");
  }
}

// Tests below

console.log(diamond(3));
// returns:
//  *
// ***
//  *
console.log(diamond(5));
// returns:
//   *
//  ***
// *****
//  ***
//   *
console.log(diamond(7));
// returns:
//   *
//  ***
// *****
//*******
// *****
//  ***
//   *
console.log(diamond(8)); // returns null
