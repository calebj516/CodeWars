// Challenge: Exclamation marks series #8: Move all exclamation marks to the end of the sentence (JavaScript) (7 kyu)

// Description: Move all exclamation marks to the end of the sentence

// My code below:

function remove(s){

  // First, split s into an array and filter out the exclamation points.
  // Next, join the result into a string.
  // Lastly, add the number of exclamation points to the end, calculated by taking the length of an array formed by filtering out all characters that are not exclamation points.
  return s.split("").filter(c => c !== '!').join("") + '!'.repeat(s.split("").filter(c => c === '!').length);
  
}

// Tests below:

console.log(remove("Hi!")); // "Hi!"
console.log(remove("Hi! Hi!")); // "Hi Hi!!"
console.log(remove("Hi! Hi! Hi!")); // "Hi Hi Hi!!!"
console.log(remove("Hi! !Hi Hi!")); // "Hi Hi Hi!!!"
console.log(remove("Hi! Hi!! Hi!")); // "Hi Hi Hi!!!!"