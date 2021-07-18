// Challenge: Word a10n (abbreviation) (6 kyu)

// Instructions:

// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

// My code below:

function abbreviate(string) {
  // Explanation of line 16:
  // string.replace: on each match with the regex, call the function match
  return string.replace(/[A-Za-z]{4,}/gi, function (match) {
    // Explanation of line 21:
    // match[0] returns the first char
    // (match.length - 2) returns the number of removed chars
    // match.slice(-1) returns the final character in the match
    return match[0] + (match.length - 2) + match.slice(-1);
  });
}

// Explanation of regex on line 16 (courtesy of https://regex101.com/):

// /[A-Za-z]{4,}/gi

// Match a single character present in the list below [A-Za-z]
// {4,} matches the previous token between 4 and unlimited times, as many times as possible, giving back as needed (greedy)
// A-Z matches a single character in the range between A (index 65) and Z (index 90) (case insensitive)
// a-z matches a single character in the range between a (index 97) and z (index 122) (case insensitive)
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
// i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])

// Tests below:
console.log(abbreviate("elephant-ride")); // "e6t-r2e"
console.log(abbreviate("elephant-rides are really fun!")); // "e6t-r3s are r4y fun!"
console.log(abbreviate("internationalization")); // "i18n"
console.log(abbreviate("accessibility")); // "a11y"
console.log(abbreviate("Accessibility")); // "A11y"
