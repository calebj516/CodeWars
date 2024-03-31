// Challenge: Is it a letter? (7 kyu)

// Description:

// Write a function, isItLetter or is_it_letter, which tells us if a given character is an, uppercase or lowercase, letter.

// Challenge code below:

function isItLetter(character) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.includes(character.toLowerCase());
}

// Tests

console.log( isItLetter('a')); // true
console.log( isItLetter('A')); // true
console.log( isItLetter('1')); // false