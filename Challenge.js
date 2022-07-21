// Challenge: All Star Code Challenge #18 (8 kyu)

// Description:

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

// My code below:

function strCount(str, letter){   
    let count = 0;
    str.split('').forEach(c => c === letter ? count += 1 : count += 0);
    return count;
}

// Tests

console.log(strCount("Hello", "o")); // 1
console.log(strCount("Hello", "l")); // 2
console.log(strCount("abcedfghijklmnopqrstuvwxyz", "z")); // 1
