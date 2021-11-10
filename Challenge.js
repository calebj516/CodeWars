// Challenge: sPoNgEbOb MeMe (7 kyu)

// Description:

// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

// You need to create a function that converts the input into this format, with the output being the same string except there is a pattern of uppercase and lowercase letters.

// My code below:

function spongeMeme(sentence) {
  // Change even-numbered indexed elements to uppercase, and odd-numbered indexed elements to lowercase
  return sentence.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase(): c.toLowerCase()).join('');
}

// Tests below:

console.log(spongeMeme("stop Making spongebob Memes!")); // 'StOp mAkInG SpOnGeBoB MeMeS!'
console.log(spongeMeme("You can't listen to Christmas music until after Thanksgiving!")); // 'yOu CaN'T LiStEn To cHrIsTmAs MuSiC UnTiL AfTeR tHaNkSgIvInG!'
