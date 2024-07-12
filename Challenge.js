// Challenge: Nothing special (7 kyu)

// Description:

// The notorious Captain Schneider has given you a very straightforward mission. Any data that comes through the system make sure that only non-special characters see the light of day.

// Create a function that given a string, retains only the letters A-Z (upper and lowercase), 0-9 digits, and whitespace characters. Also, returns "Not a string!" if the entry type is not a string.

// Challenge code below:

function nothingSpecial(str) {
  if(typeof str != "string") return "Not a string!";  
  return str.replace(/[^A-Za-z\d\s]/g, '');
}

// Tests

console.log(nothingSpecial('St@arboard P^ort')); // 'Starboard Port'
console.log(nothingSpecial('$A$ ***little k@$ata fo&r ^my ^trou%bl$es')); // 'A little kata for my troubles'
console.log(nothingSpecial('Steamroller')); // 'Steamroller'
console.log(nothingSpecial(2.55)); // 'Not a string!'
console.log(nothingSpecial({ 2: 5 })); // 'Not a string!'
console.log(nothingSpecial([1, 2, 3, 4])); // 'Not a string!'