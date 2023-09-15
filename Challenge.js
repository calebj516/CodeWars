// Challenge: Sort and Star (8 kyu)

// Description:

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// Challenge code below:

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

// Tests

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])); // 'b***i***t***c***o***i***n' 
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])); // 'a***r***e' 
console.log(twoSort(["lets", "talk", "about", "javascript", "the", "best", "language"])); // 'a***b***o***u***t' 
console.log(twoSort(["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"])); // 'c***o***d***e' 
console.log(twoSort(["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"])); // 'L***e***t***s' 
