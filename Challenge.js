// Challenge: If you can read this... (6 kyu)

// Instructions:

// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There are preloaded dictionary you can use, named NATO
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace

let NATO = {
  a: "Alfa",
  n: "November",
  b: "Bravo",
  o: "Oscar",
  c: "Charlie",
  p: "Papa",
  d: "Delta",
  q: "Quebec",
  e: "Echo",
  r: "Romeo",
  f: "Foxtrot",
  s: "Sierra",
  g: "Golf",
  t: "Tango",
  h: "Hotel",
  u: "Uniform",
  i: "India",
  v: "Victor",
  j: "Juliett",
  w: "Whiskey",
  k: "Kilo",
  x: "Xray",
  l: "Lima",
  y: "Yankee",
  m: "Mike",
  z: "Zulu",
};

// My code below:

function to_nato(words) {
  // split words into an array, filtering out spaces and changing it to lowercase.
  let arr = words
    .split("")
    .filter((el) => el !== " ")
    .join("")
    .toLowerCase()
    .split("");
  // result array to hold the final result.
  let result = [];
  // loop through the array, pushing the NATO version of each element (if present in NATO) to the result array.
  // if the element is not present in NATO, push the element from the modified array directly to result.
  for (let i = 0; i < arr.length; i++) {
    NATO[arr[i]] ? result.push(NATO[arr[i]]) : result.push(arr[i]);
  }
  // join result into a string, and return it.
  return result.join(" ");
}

// Tests below:

console.log(to_nato("If you can read")); //  "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
console.log(to_nato("Did not see that coming")); //  "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf"
console.log(to_nato("go for it!")); //   "Golf Oscar Foxtrot Oscar Romeo India Tango !"
