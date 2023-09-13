// Challenge: Counting sheep... (8 kyu)

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// Challenge code below:

const countSheeps = sheep => sheep.filter(el => el == true).length;

// Tests

let sheep1 = [];
let sheep2 = [undefined];
let sheep3 = [null];
let sheep4 = [false];
let sheep5 = [true];
let sheep6 = [undefined, null, false, true]; // 1
let sheep7 = [undefined,null,false,true,true,false,null,undefined] // 2
let sheep8 = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]; // 17

console.log(countSheeps(sheep1)); // 0
console.log(countSheeps(sheep2)); // 0
console.log(countSheeps(sheep3)); // 0
console.log(countSheeps(sheep4)); // 0
console.log(countSheeps(sheep5)); // 1
console.log(countSheeps(sheep6)); // 1
console.log(countSheeps(sheep7)); // 2
console.log(countSheeps(sheep8)); // 17