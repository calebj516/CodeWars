// Challenge: 8 inch pizza equivalence (6 kyu)

// Description:

// How much bigger is a 16-inch pizza compared to an 8-inch pizza? A more pragmatic question is: How many 8-inch pizzas "fit" in a 16-incher?

// The answer, as it turns out, is exactly four 8-inch pizzas. For sizes that don't correspond to a round number of 8-inchers, you must round the number of slices (one 8-inch pizza = 8 slices), e.g.:

// how_many_pizzas(16) -> "pizzas: 4, slices: 0"
// how_many_pizzas(12) -> "pizzas: 2, slices: 2"
// how_many_pizzas(8) -> "pizzas: 1, slices: 0"
// how_many_pizzas(6) -> "pizzas: 0, slices: 5"
// how_many_pizzas(0) -> "pizzas: 0, slices: 0"
// Get coding quick, so you can choose the ideal size for your next meal!

// My code below:

function howManyPizzas(n) {
  const AREA_8INCH_PIZZA = Math.PI * 4 ** 2;
  const RADIUS = n / 2;
  let numSlices = 0;
  let numPizzas = (Math.PI * RADIUS ** 2) / AREA_8INCH_PIZZA;

  // if the number of pizzas is not a whole number, calculate the number of slices and include that in the result.
  if (numPizzas % 1) {
    numSlices = Math.round((numPizzas % 1) * 8);
    numPizzas = Math.floor(numPizzas);
    return `pizzas: ${numPizzas}, slices: ${numSlices}`;
  } else {
    // otherwise return the number of pizzas, with 0 slices.
    return `pizzas: ${numPizzas}, slices: 0`;
  }
}

// Tests

console.log(howManyPizzas(16)); // "pizzas: 4, slices: 0"
console.log(howManyPizzas(12)); // "pizzas: 2, slices: 2"
console.log(howManyPizzas(8)); // "pizzas: 1, slices: 0"
console.log(howManyPizzas(6)); // "pizzas: 0, slices: 5"
console.log(howManyPizzas(0)); // "pizzas: 0, slices: 0"
