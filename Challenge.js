// Challenge: Pizza Payments (7 kyu)

// Description:

// Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:

// If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
// Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.
// How much is Michael going to pay? Calculate the amount with two decimals, if necessary.

// Challenge code below:

function michaelPays(costs) {
  
    if(costs < 5) return Math.round(100 * costs) / 100;
    if((costs / 3) > 10) return Math.round(100 * (costs - 10)) / 100;
    
    return Math.round(100 * (costs - (costs / 3))) / 100;
  }

// Tests

console.log(michaelPays(15)); // 10
console.log(michaelPays(4)); // 4
console.log(michaelPays(4.99)); // 4.99
console.log(michaelPays(5)); // 3.33
console.log(michaelPays(30)); // 20
console.log(michaelPays(80)); // 70
console.log(michaelPays(22)); // 14.67
console.log(michaelPays(5.9181)); // 3.95
console.log(michaelPays(28.789)); // 19.19
console.log(michaelPays(4.325)); // 4.33