// Challenge: Longest vowel chain (7 kyu)

// Description:

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// My code below:

function solve(s){
  // the spread operator "unpacks" the array of lengths of each vowel/vowels
  // and allows Math.max to return the maximum value, which would be the longest vowel chain
  return Math.max(...s.match(/[aeiou]+/g).map(num => num.length));
}

// Tests

console.log(solve("codewarriors")); // 2
console.log(solve("suoidea")); // 3
console.log(solve("ultrarevolutionariees")); // 3
console.log(solve("strengthlessnesses")); // 1
console.log(solve("cuboideonavicuare")); // 2
console.log(solve("chrononhotonthuooaos")); // 5
console.log(solve("iiihoovaeaaaoougjyaw")); // 8
