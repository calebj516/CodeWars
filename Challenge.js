// Challenge: Check three and two (7 kyu)

// Description:

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples:

// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

// Challenge code below:

function checkThreeAndTwo(array) {
    let a = array.filter(char => char == 'a').length;
    let b = array.filter(char => char == 'b').length;
    let c = array.filter(char => char == 'c').length;
    
    const frequencies = [a, b, c];
    
    return frequencies.includes(3) && frequencies.includes(2);
}

// Tests

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])); // true
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"])); // false
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"])); // false