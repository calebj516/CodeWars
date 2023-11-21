// Challenge: Sort Deck of Cards (7 kyu)

// Write a function sort_cards() that sorts a shuffled list of cards, so that any given list of cards is sorted by rank, no matter the starting collection.

// All cards in the list are represented as strings, so that sorted list of cards looks like this:

// ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

// Example:

// >>> sort_cards(['3', '9', 'A', '5', 'T', '8', '2', '4', 'Q', '7', 'J', '6', 'K'])
// ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

// Hint: Tests will have many occurrences of same rank cards, as well as vary in length. You can assume though, that input list is always going to have at least 1 element.

// Challenge code below:

function sortCards(array){
    const sortOrder = {
      'A' : 1,
      '2' : 2,
      '3' : 3,
      '4' : 4,
      '5' : 5,
      '6' : 6,
      '7' : 7,
      '8' : 8,
      '9' : 9,
      'T' : 10,
      'J' : 11,
      'Q' : 12,
      'K' : 13
    };
    
    return array.sort((a, b) => sortOrder[a] - sortOrder[b]);
  }

// Tests

console.log(sortCards([3,9,"A",5,"T",8,2,4,"Q",7,"J",6,"K"])); // (["A",2,3,4,5,6,7,8,9,"T","J","Q","K"])
console.log(sortCards(["J","J",2,"T",9,6])); // ([2,6,9,"T","J","J"])
console.log(sortCards(["A",2,3,4,5,6,6,7,8,9,"T","J","Q","A"])); // (['A', 'A', 2, 3, 4, 5, 6, 6, 7, 8, 9, 'T', 'J', 'Q'])
console.log(sortCards([])); // ([])
console.log(sortCards([2,4,5,6,7,9,"A"])); // (["A",2,4,5,6,7,9])
console.log(sortCards(["Q","K","T","A","J"])); // (["A","T","J","Q","K"])
console.log(sortCards([3,"Q",2,"T","J","J","J",8,9,2,2,6])); // ([2,2,2,3,6,8,9,"T","J","J","J","Q"])
console.log(sortCards([2,3,4,5,6,7,8,9])); // ([2,3,4,5,6,7,8,9])
console.log(sortCards([2])); // ([2])
console.log(sortCards(["T","Q",2,"K",6,6,5])); // ([2,5,6,6,"T","Q","K"])