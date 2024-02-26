// Challenge: Easy logs (8 kyu)

// Description:

// Given a logarithm base X and two values A and B, return a sum of logratihms with the base X

// Challenge code below:

const logs = (x, a, b) => (Math.log(a) + Math.log(b)) / Math.log(x);

// Tests

console.log(logs(10, 2, 3)); // 0.7781512503836435
console.log(logs(5, 2, 3)); // 1.1132827525593785
console.log(logs(1000, 2, 3)); // 0.25938375012788123
console.log(logs(2, 1, 2)); // 1
console.log(logs(0.00001, 0.002, 0.01)); // 0.9397940008672038
console.log(logs(0.1, 0.002, 0.01)); // 4.69897000433602