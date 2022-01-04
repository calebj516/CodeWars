// Challenge: Two to One (7 kyu)

// Description:

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My code below:

function longest(s1, s2) {
  // your code
  return (s1 + s2)
    .split("")
    .sort()
    .filter((el, i, arr) => el !== arr[i + 1])
    .join("");
}

// Tests

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy"
console.log(longest("lordsofthefallen", "gamekult")); // "adefghklmnorstu"
console.log(longest("codewars", "codewars")); // "acdeorsw"
console.log(longest("agenerationmustconfrontthelooming", "codewarrs")); // "acdefghilmnorstuw"
