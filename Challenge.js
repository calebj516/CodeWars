// Challenge: Decode the Morse Code (6 kyu)

// Description:

// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"
// NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

// All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

// Good luck!

// My code below:

const decodeMorse = (morseCode) => {
  let strResult = "",
    letter = "";
  let letters = morseCode.trim().split(" ");

  for (letter of letters) {
    strResult += getKeyByValue(MORSE_CODE, letter) || " ";
  }

  return strResult.split("  ").join(" ");
};

const MORSE_CODE = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",

  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",

  ",": "--..--",
  ".": ".-.-.-",
  ":": "---...",
  ";": "-.-.-.",
  "?": "..--..",
  "=": "-...-",
  "'": ".----.",
  "/": "-..-.",
  "!": "-.-.--",
  "-": "-....-",
  _: "..--.-",
  "(": "-.--.",
  ")": "-.--.-",
  $: "...-..-",
  "&": ". . . .",
  "@": ".--.-.",

  SOS: "...---...",
};

// https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value

const getKeyByValue = (object, value) =>
  Object.keys(object).find((key) => object[key] === value);

// Tests

console.log(decodeMorse(".... . -.--   .--- ..- -.. .")); // "HEY JUDE"
console.log(decodeMorse("   .... . -.--   ")); // 'HEY'
console.log(decodeMorse(".-")); // 'A'
console.log(decodeMorse(".")); // 'E'
console.log(decodeMorse("..")); // 'I'
console.log(decodeMorse(". .")); // 'EE'
console.log(decodeMorse(".   .")); // 'E E'
console.log(decodeMorse("...---...")); // 'SOS'
console.log(decodeMorse("... --- ...")); // 'SOS'
console.log(decodeMorse("...   ---   ...")); // 'S O S'
