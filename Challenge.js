// Challenge: Filter Unused Digits (7 kyu)

// Description:

// Welcome to the Codewars Bar!
// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

// Examples
// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks

// My code below:

function hydrate(s) {
  // replace all non digit characters with '' which removes them from the string
  // split into an array
  // convert each element into a number
  // reduce the numbers into one number (summing up)
  // Finally, based on the number of glasses, return a template literal stating 'glasses' (if greater than 1 glass) or 'glass'
  const numGlasses = s
    .replace(/\D/g, "")
    .split("")
    .map(Number)
    .reduce((total, currentNum) => total + currentNum);
  return numGlasses > 1 ? `${numGlasses} glasses of water` : `1 glass of water`;
}

// Tests

console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"));
