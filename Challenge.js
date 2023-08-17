// Challenge: Array Array Array (7 kyu)

// Description:

// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

// Challenge code below:

const explode = ([x, y]) => x + 0 != x && y + 0 != y ? 'Void!' : Array((+x || 0) + (+y || 0)).fill([x, y]);

// Notes on logic:

// x and y are each tested to see if they are numbers by adding a 0 to each. If they are in fact numbers, this will not change the value of the variable.
// If neither of them are numbers, 'Void!' is returned as required by the challenge instructions.
// Otherwise, the Array constructor is used to initialize an array of x + y length. If x or y is not a number, 0 wil be used instead.
// The end result is that an array with the appropriate length is created, and then filled with the original array that was passed in.

// Tests

console.log(explode([9, 3])); // [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
console.log(explode(['a', 3])); // [['a', 3], ['a', 3], ['a', 3]]
console.log(explode([6, 'c'])); // [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
console.log(explode(['a', 'b'])); // 'Void!'
console.log(explode([1, 0])); // [[1,0]] 
console.log(explode(["a", 0])); // []