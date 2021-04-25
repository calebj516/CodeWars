// Reverse FizzBuzz

// Traditionally in FizzBuzz, multiples of 3 are replaced by "Fizz" and multiples of 5 are replaced by "Buzz". But we could also play FizzBuzz with any other integer pair [n, m] whose multiples are replaced with Fizz and Buzz.

// For a sequence of numbers, Fizzes, Buzzes and FizzBuzzes, find the numbers whose multiples are being replaced by Fizz and Buzz. Return them as an array [n, m]

// The Fizz and Buzz numbers will always be integers between 1 and 50, and the sequence will have a maximum length of 100. The Fizz and Buzz numbers might be equal, and might be equal to 1.

function reverseFizzBuzz(array) {
  let arr = [];

  if (array.indexOf("Fizz") !== -1 && array.indexOf("Buzz") !== -1) {
    let n = array.indexOf("Fizz") + 1;
    let m = array.indexOf("Buzz") + 1;
    arr.push(n);
    arr.push(m);
    return arr;
  } else if (array.indexOf("Fizz") === -1 && array.indexOf("Buzz") === -1) {
    let n = array.indexOf("FizzBuzz") + 1;
    let m = n;
    arr.push(n);
    arr.push(m);
    return arr;
  } else if (array.indexOf("Fizz") !== -1 && array.indexOf("Buzz") === -1) {
    let n = array.indexOf("Fizz") + 1;
    let m = array.indexOf("FizzBuzz") + 1;
    arr.push(n);
    arr.push(m);
    return arr;
  }
}
