// Challenge: Is it a letter? (7 kyu)

// Description:

// Write a function, isItLetter or is_it_letter, which tells us if a given character is an, uppercase or lowercase, letter.

// Challenge code below:

function isItLetter(character) {
    let code = character.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

// Tests

console.log( isItLetter('a')); // true
console.log( isItLetter('1')); // false