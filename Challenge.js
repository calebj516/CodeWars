// Challenge: Is it a letter? (7 kyu)

// Description:

// Write a function, isItLetter or is_it_letter, which tells us if a given character is an, uppercase or lowercase, letter.

// Challenge code below:

function isItLetter(character) {
    return /[a-z]/i.test(character);
}

// Tests

console.log( isItLetter('a')); // true
console.log( isItLetter('1')); // false