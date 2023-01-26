// Challenge: Isograms (7 kyu)

// Description:

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// My code below:

const isIsogram = str => new Set(str.toLowerCase()).size == str.length;

// Tests

console.log(isIsogram("Dermatoglyphics")); // true 
console.log(isIsogram("isogram")); // true
console.log(isIsogram("moose")); // false
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("thumbscrewjapingly")); // true
console.log(isIsogram("")); // true