// Challenge: Reversing Words in a String (8 kyu)

// Description:

// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

// Challenge code below:

function reverse(string){
    return string.split(' ').reverse().join(' ');
}

// Tests

console.log(reverse('I am an expert at this')); // 'this at expert an am I'
console.log(reverse('This is so easy')); // 'easy so is This'
console.log(reverse('no one cares')); // 'cares one no'
console.log(reverse('')); // ''
console.log(reverse('CodeWars')); // 'CodeWars'