// Challenge: Slice the middle of a list backwards (7 kyu)

// Description:

// Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.

// Challenge code below:

function reverseMiddle(array) {
    let midIndex = Math.ceil(array.length / 2) - 1;
    return (array.length % 2 ? array.slice(midIndex - 1, midIndex + 2): array.slice(midIndex, midIndex + 2)).reverse();
}

// Tests

console.log(reverseMiddle([1, 2, 3, 4])); // [3, 2]
console.log(reverseMiddle([1, 2, 3, 4, 5])); // [4, 3, 2]
console.log(reverseMiddle([1, 2, 3, 4, 5, 6])); // [4, 3]
console.log(reverseMiddle([1, 2, 3, 4, 5, 6, 7])); // [5, 4, 3]
