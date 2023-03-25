// Challenge: Divide and Conquer (7 kyu)

// Description:

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// My code below:

function divCon(x) {
  const nonStrIntTotal = x
    .filter((el) => typeof el === "number")
    .reduce((total, current) => total + current, 0);
  
  const strIntTotal = x
    .filter((el) => typeof el === "string")
    .reduce((total, current) => total + Number(current), 0);

  return nonStrIntTotal - strIntTotal;
}

// Tests

console.log(divCon([9, 3, "7", "3"])); // 2
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7])); // 14
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); // 13
console.log(divCon(["1", "5", "8", 8, 9, 9, 2, "3"])); // 11
console.log(divCon([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7])); // 61
