// Challenge: IQ Test (6 kyu)

// Instructions:

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// Examples:
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

// My code below:

function iqTest(numbers) {
  // create an array with numbers
  let nums = numbers.split(" ");
  // test each element in the array, determining if the number is even or odd
  const evenOrOdd = nums.map((n) => (n % 2 === 0 ? "Even" : "Odd"));
  // Determine which element is different from the rest and return its position
  let evenCount = 0;
  let oddCount = 0;
  evenOrOdd.map((n) => (n === "Even" ? evenCount++ : oddCount++));
  // Return index of Even or Odd, depending on which one's count is equal to 1. Then add 1 to the index based on the instructions for this challenge.
  return evenOrOdd.indexOf(evenCount === 1 ? "Even" : "Odd") + 1;
}

// Tests below
console.log(iqTest("2 4 7 8 10")); // Return 3. Third number is odd, while the rest of the numbers are even

console.log(iqTest("1 2 1 1")); // Return 2. Second number is even, while the rest of the numbers are odd
