// Challenge: Sum of integers in string (7 kyu)

// Description:

// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

// My code below:

function sumOfIntegersInString(s) {
  // the regex in match will return one or more numbers as a group, not each number individually. This allows reduce to function as intended (e.g. 12 + 12 instead of 1+2+1+2)
  // if there are no numbers at all in s, an empty array will be returned
  return (s.match(/\d+/g) || []).reduce(
    (total, currentValue) => total + Number(currentValue),
    0
  );
}

// Tests

console.log(sumOfIntegersInString("12.4")); // ["12.4", 16],
console.log(sumOfIntegersInString("h3ll0w0rld")); // ["h3ll0w0rld", 3],
console.log(sumOfIntegersInString("2 + 3 = ")); // ["2 + 3 = ", 5],
console.log(
  sumOfIntegersInString(
    "Our company made approximately 1 million in gross revenue last quarter."
  )
); // ["Our company made approximately 1 million in gross revenue last quarter.",1,]
console.log(
  sumOfIntegersInString("The Great Depression lasted from 1929 to 1939.")
); // ["The Great Depression lasted from 1929 to 1939.", 3868],
console.log(sumOfIntegersInString("Dogs are our best friends.")); // ["Dogs are our best friends.", 0],
console.log(sumOfIntegersInString("C4t5 are 4m4z1ng.")); // ["C4t5 are 4m4z1ng.", 18],
console.log(
  sumOfIntegersInString(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
  )
); // ["The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 3635];
