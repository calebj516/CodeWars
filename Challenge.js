// Challenge: Return String of First Characters (7 kyu)

// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// My code below:

function makeString(s){
  // split s into an array
  s = s.split(" ");
  // declare variable to hold result
  let result = [];
  // Push the beginning character of each element to result
  for(let i = 0; i < s.length; i++){
    result.push(s[i][0]);  
  }
  // Return result joined into a string
  return result.join("");
}

// Tests below:

console.log(makeString("This Is A Test")); // "TIAT"
console.log(makeString("sees eyes xray yoat")); // "sexy"
console.log(makeString("brown eyes are nice")); // "bean"

