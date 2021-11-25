// Challenge: Count the Digit (7 kyu)

// Description:

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// My code below:

const nbDig = (n, d) => {
  // variable to hold total number of digits d
  let totalOfDigits = 0;
  // loop through from 0 to n, squaring each number, converting the result into a string, changing that string into an array, and filtering out the numbers that don't match d.
  for(let i = 0; i <= n; i++){
    totalOfDigits += (i * i).toString().split('').filter(num => num == d).length;
  }

  return totalOfDigits;
}

// Tests below:
console.log(nbDig(5750, 0)); // 4700
console.log(nbDig(11011, 2)); // 9481
console.log(nbDig(12224, 8)); // 7733