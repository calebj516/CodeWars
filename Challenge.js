// Challenge: Ones' Complement (7 kyu)

// Description:

// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:

// onesComplement(1001) = 0110
// onesComplement(1001) = 0110
// For any given binary number,formatted as a string, return the Ones' Complement of that number.

// My code below:

function onesComplement(n) {
    // split n into an array
    // map each element as follows: if 0, then 1; otherwise, 0
    // join back into a string for the final result
    return n.split('').map(num => num === "0" ? "1" : "0").join('');
}

// Tests

console.log(onesComplement("0")); // "1"
console.log(onesComplement("1")); // "0"
console.log(onesComplement("10")); // "01"
console.log(onesComplement("01")); // "10"
console.log(onesComplement("1101")); // "0010"
