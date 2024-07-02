// Challenge: Parse nice int from char problem (8 kyu)

// Description:

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// Challenge code below:

function getAge(inputString){
  return Number(inputString[0]);
}

// Tests

console.log(getAge("4 years old")); // 4
console.log(getAge("5 years old")); // 5
console.log(getAge("7 years old")); // 7
console.log(getAge("6 years old")); // 6
console.log(getAge("0 years old")); // 0
console.log(getAge("8 years old")); // 8
console.log(getAge("9 years old")); // 9
console.log(getAge("1 year old")); // 1
console.log(getAge("2 years old")); // 2
console.log(getAge("3 years old")); // 3