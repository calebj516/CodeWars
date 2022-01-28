// Challenge: Who likes it? (6 kyu)

// Description:

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// My code below:

function likes(names) {
  // If the length of names is sufficiently long, the first three names will be stored in the below variables (otherwise, null).
  let first = names.length > 0 ? names[0] : null;
  let second = names.length >= 2 ? names[1] : null;
  let third = names.length >= 3 ? names[2] : null;
  // This will indicate the remaining number of likes beyond the first two names.
  let remainingCount = names.length - 2;

  if (names.length >= 4) {
    return `${first}, ${second} and ${remainingCount} others like this`;
  } else if (names.length >= 3) {
    return `${first}, ${second} and ${third} like this`;
  } else if (names.length >= 2) {
    return `${first} and ${second} like this`;
  } else if (names.length >= 1) {
    return `${first} likes this`;
  } else {
    return "no one likes this";
  }
}

// Tests

console.log(likes([])); // -->  "no one likes this"
console.log(likes(["Peter"])); // -->  "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // -->  "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // -->  "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // -->  "Alex, Jacob and 2 others like this"
