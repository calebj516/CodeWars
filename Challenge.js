// Challenge: Fizz Buzz - Without ifs (7 kyu)

// Description:

// I know that there are quite a few fizz-buzz problems already out there but this one does have a twist (you may find this useful)

// Task:

// You need to implement a function that applies the standard fizz buzz test:

// If a number is divisible by 3, return Fizz
// If it is divisible by 5, return Buzz
// If it is divisible by both 3 and 5, return FizzBuzz
// If it is not divisible by 3 or 5, return the number itself
// However, when making the function, you cannot use if (meaning else is also not an option).

// Input:

// A number will always be provided
// The number provided will always be positive and an integer

// Examples:

// 6 should return Fizz
// 10 should return Buzz
// 15 should return FizzBuzz
// 17 should return 17

// My code below:

// The code does the following:
// if n is only divisible by 3... return Fizz + an empty string, which evaluates to Fizz
// if n is only divisible by 5... return an empty string + Buzz, which evaluates to Buzz
// if n is divisible by both 3 and 5... return an Fizz + Buzz, which evaluates to FizzBuzz
// if n is divisible by neither 3 nor 5, the two "halves" of the expression evaluate to two empty strings, which added together are stil an empty string,
// which evaluates to false. Due to the logical OR operator, the truthy value will be returned, which is n.

const fizzBuzz = n => ((n % 3 === 0 ? 'Fizz' : '') + (n % 5 === 0 ? 'Buzz' : '') || n );

// Tests

console.log(fizzBuzz(3)) // "Fizz"
console.log(fizzBuzz(5)) // "Buzz"
console.log(fizzBuzz(15)) // "FizzBuzz"
console.log(fizzBuzz(17)) // "17"
