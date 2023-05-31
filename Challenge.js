// Challenge: Sum - Square Even, Root Odd (7 kyu)

// Description:

// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

// Good luck!

// My code below:

const sumSquareEvenRootOdd = numbers => {
  let total = 0;

  for (let num of numbers) {
    total += (num % 2 ? num ** 0.5 : num ** 2);
  }

  return total.toFixed(2);
}

// Tests

console.log(sumSquareEvenRootOdd([1, 14, 9, 8, 17, 21])); // 272.71
console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0])); // 91.61
