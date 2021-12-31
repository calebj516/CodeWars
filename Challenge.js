// Challenge: Noonerize Me (7 kyu)

// Description:

// Spoonerize... with numbers... numberize?... numboonerize?... noonerize? ...anyway! If you don't yet know what a spoonerism is and haven't yet tried my spoonerism kata, please do check it out first.

// You will create a function which takes an array of two positive integers, spoonerizes them, and returns the positive difference between them as a single number or 0 if the numbers are equal:

// [123, 456] = 423 - 156 = 267
// Your code must test that all array items are numbers and return "invalid array" if it finds that either item is not a number. The provided array will always contain 2 elements.

// When the inputs are valid, they will always be integers, no floats will be passed. However, you must take into account that the numbers will be of varying magnitude, between and within test cases.

// My code below:

function noonerize(numbers) {
  // ...mathoonerize, maybe?
  if (numbers.every((el) => typeof el === "number")) {
    numbers = numbers.map(String);
    let [a, b] = numbers;
    [a, b] = [b[0] + a.slice(1), a[0] + b.slice(1)];
    numbers = numbers.map(Number);
    return Math.abs([a - b]);
  }
  return "invalid array";
}

// Tests

console.log(noonerize([12, 34])); // 18
console.log(noonerize([55, 63])); // 12
console.log(noonerize([357, 579])); // 178
console.log(noonerize(["hello", "world"])); // "invalid array"
console.log(noonerize([1000000, 9999999])); // 7000001
console.log(noonerize([1000000, "hello"])); // "invalid array"
console.log(noonerize(["world", 63])); // "invalid array"
