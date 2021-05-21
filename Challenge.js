// "Last Survivors Ep.2" Challenge - 7 kyu

// Instructions

// Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

// "aa" => "b", "bb" => "c", .. "zz" => "a".
// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.

// Example:

// let str = "zzzab"
//     str = "azab"
//     str = "bzb"
//     str = "cz"
// return "cz"
// Notes
// The order of letters in the result is not important.
// The letters "zz" transform into "a".
// There will only be lowercase letters.

// My code below

function lastSurvivors(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split("");
  // console.log(alphabet);
  let arr = str.split("");
  let char = str[0];
  let letter, result;
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    // Does the character show up again in str?
    if (arr.includes(char, i + 1)) {
      letter = alphabet[alphabet.indexOf(char) + 1];
    }
  }
  console.log(letter);
}

// Tests
lastSurvivors("bbz");
