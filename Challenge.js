// Challenge: Exclamation marks series #8: Move all exclamation marks to the end of the sentence (JavaScript) (7 kyu)

// Description: Move all exclamation marks to the end of the sentence

// My code below:

function remove(s){
  // Note: replace x with '' removes x.
  // First, remove all exclamation points.
  // Next, remove all non-exclamation points. Add this to the first result for the final answer.
  return s.replace(/!/g, '') + s.replace(/[^!]/g, '');
  
}

// Tests below:

console.log(remove("Hi!")); // "Hi!"
console.log(remove("Hi! Hi!")); // "Hi Hi!!"
console.log(remove("Hi! Hi! Hi!")); // "Hi Hi Hi!!!"
console.log(remove("Hi! !Hi Hi!")); // "Hi Hi Hi!!!"
console.log(remove("Hi! Hi!! Hi!")); // "Hi Hi Hi!!!!"