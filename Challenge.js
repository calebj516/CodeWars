// Challenge: makeBackronym (7 kyu)

// Description:

// back·ro·nym
// An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.

// "Biodiversity Serving Our Nation", or BISON

// (from https://en.oxforddictionaries.com/definition/backronym)

// Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

// The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:

// dict["P"] == "perfect"
// Examples
// "dgm" ==> "disturbing gregarious mustache"

// "lkj" ==> "literal klingon joke"

// Code for 'preloaded' dict below:

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
const words = 'awesome beautiful confident disturbing eager fantastic gregarious hippy ingestable joke klingon literal mustache newtonian oscillating perfect queen rant stylish turn underlying volcano weird xylophone yogic zero'.split(' ');
const dict = {};

const createObj = (keys, values, length, obj) => {

  for(let i = 0; i < length; i++) {
    obj[keys[i]] = values[i];
  }

};

createObj(alphabet, words, 26, dict);

// Challenge code below:

const makeBackronym = string => string.toUpperCase().split('').map(letter => dict[letter]).join(' ');

// Tests

console.log(makeBackronym('adh')); // 'awesome disturbing hippy'
console.log(makeBackronym('dgm')); // 'disturbing gregarious mustache'
console.log(makeBackronym('lmnop')); // 'literal mustache newtonian oscillating perfect'