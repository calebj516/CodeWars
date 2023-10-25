// Challenge: Katastrophe! (7 kyu)

// You have been employed by the Japanese government to write a function that tests whether or not a building is strong enough to withstand a simulated earthquake.

// A building will fall if the magnitude of the earthquake is greater than the strength of the building.

// An earthquake takes the form of a 2D-Array. Each element within the Outer-Array represents a shockwave, and each element within the Inner-Arrays represents a tremor. The magnitude of the earthquake is determined by the product of the values of its shockwaves. A shockwave is equal to the sum of the values of its tremors.

// Example earthquake --> [[5,3,7],[3,3,1],[4,1,2]] ((5+3+7) * (3+3+1) * (4+1+2)) = 735

// A building begins with a strength value of 1000 when first built, but this value is subject to exponential decay of 1% per year. For more info on exponential decay, follow this link - https://en.wikipedia.org/wiki/Exponential_decay

// Given an earthquake and the age of a building, write a function that returns "Safe!" if the building is strong enough, or "Needs Reinforcement!" if it falls.

// Challenge code below:

const strongEnough = (earthquake, age) => earthquake.map(el => el.reduce((total, current) => total + current, 0)).reduce((total, current) => total * current) > buildingStrength(age) ? "Needs Reinforcement!" : "Safe!";

const buildingStrength = (age) => 1000 * (0.99 ** age);

// Tests

console.log(strongEnough([[2,3,1],[3,1,1],[1,1,2]], 2)); // "Safe!"
console.log(strongEnough([[5,8,7],[3,3,1],[4,1,2]], 2)); // "Safe!"
console.log(strongEnough([[5,8,7],[3,3,1],[4,1,2]], 3)); // "Needs Reinforcement!"
console.log(strongEnough([[5,1,7],[1,1,1],[4,1,2]], 100)); // "Safe!"
console.log(strongEnough([[5,1,7],[1,1,7],[4,1,2]], 50)); // "Needs Reinforcement!"
console.log(strongEnough([[5,8,7],[1,1,1],[6,6,1]], 25)); // "Needs Reinforcement!"
console.log(strongEnough([[5,8,7],[1,1,1],[6,6,1]], 20)); // "Safe!"
console.log(strongEnough([[1,8,7],[1,3,1],[6,2,1]], 30)); // "Safe!"
console.log(strongEnough([[1,1,6],[1,1,10],[6,10,1]], 2)); // "Needs Reinforcement!"
console.log(strongEnough([[1,1,1],[1,1,1],[1,1,1]], 325)); // "Safe!"