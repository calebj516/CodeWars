// Challenge: Longest vowel chain (7 kyu)

// Description:

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// My code below:

function solve(s){
  // replace consonants with a space
  // split s into an array using the space as a delimiter. This will group contiguous consonants together.
  // sort s based on descending length -- the longest will be first
  // return the first element's length for the final answer
  return s.replace(/[^aeiou]/g, ' ').split(' ').sort((a, b) => b.length - a.length)[0].length;
}

// Tests

console.log(solve("codewarriors")); // 2
console.log(solve("suoidea")); // 3
console.log(solve("ultrarevolutionariees")); // 3
console.log(solve("strengthlessnesses")); // 1
console.log(solve("cuboideonavicuare")); // 2
console.log(solve("chrononhotonthuooaos")); // 5
console.log(solve("iiihoovaeaaaoougjyaw")); // 8
