// Challenge: Counting Duplicates (6 kyu)

// Description:

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// My code below:

function duplicateCount(text) {
  const textArr = text.toLowerCase().split("").sort();
  const distinctChars = [];

  for (let i = 0; i < textArr.length; i++) {
    // if the character following the current one is the same, and has not already been added to the distinct chars array...
    // push the character to the distinct chars array
    if (textArr[i] == textArr[i + 1] && !distinctChars.includes(textArr[i]))
      distinctChars.push(textArr[i]);
  }

  return distinctChars.length;
}

// Tests

console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2
console.log(duplicateCount("indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); // 2
console.log(duplicateCount("aA11")); // 2
console.log(duplicateCount("ABBA")); // 2
