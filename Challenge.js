// Challenge: Move 10 (7 kyu)

// Description:

// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

// My code below:

const moveTen = s => s.toLowerCase().split('').map(el => String.fromCharCode((el.charCodeAt(0) - 87) % 26 + 97)).join('');

// Tests

console.log(moveTen("testcase")); // "docdmkco"
console.log(moveTen("codewars")); // "mynogkbc"
console.log(moveTen("exampletesthere")); // "ohkwzvodocdrobo"
console.log(moveTen("returnofthespacecamel")); // "bodebxypdroczkmomkwov"
console.log(moveTen("bringonthebootcamp")); // "lbsxqyxdrolyydmkwz"
console.log(moveTen("weneedanofficedog")); // "goxoonkxyppsmonyq"
