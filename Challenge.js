// Challenge: Letter Triangles (6 kyu)

// Description:

// Letter triangles

// similar to Coloured triangles

// But this one sums indexes of letters in alphabet.

// Examples

// c o d e w a r s
// c is 3
// o is 15
// 15+3=18
// 18. letter in the alphabet is r
// then append r
// next is o d
// sum is 19
// append s

// do this until you iterate through whole string
// now, string is rsibxsk
// repeat whole cycle until you reach 1 character
// then return the char

// output is l
// codewars -> l
// triangle -> d
// C O D E W A R S
//  R S I B X S K
//   K B K Z Q D
//    M M K Q U
//     Z X B L
//      X Z N
//       X N
//        L
// A B C D
//  C E G
//   H L
//    T

// More examples

// youhavechosentotranslatethiskata -> a
// cod -> k
// yes -> b
// hours -> y
// circlecipher -> z
// lettertriangles -> o
// cod -> rs -> k
// abcd -> ceg -> hl -> t
// codewars -> rsibxsk -> kbkzqd -> mmkqu -> zxbl -> xzn -> xn -> l
// Note, if the sum is bigger than 26 then start over

// input will always be lowercase letters

// random tests contains strings up to 30 chars

// My code below:

const triangle = str => {
  if(str.length == 1) return str;

  let myStr = "";

  for(let i = 0; i < str.length - 1; i++) {
    // index 1, index 2, then add both together to get the next index
    let index1 = str[i].charCodeAt(0) - 96;
    let index2 = str[i + 1].charCodeAt(0) - 96;
    let index3 = index1 + index2;
    // we need the position of the character in the alphabet, so if greater than 26, offset that by subtracting 26
    if(index3 > 26) index3 -= 26;
    // append result to myStr
    myStr += String.fromCharCode(index3 + 96);
  }

  return triangle(myStr);
}

// Tests

console.log(triangle('codewars')); // 'l'
console.log(triangle('triangle')); // 'd'
console.log(triangle('youhavechosentotranslatethiskata')); // 'a'
console.log(triangle('b')); // 'b'
console.log(triangle('zz')); // 'z'
