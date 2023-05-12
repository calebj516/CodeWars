// Challenge: Sort rectangles and circles by area II (7 kyu)

// Description:

// In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.

// For example,

// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
// sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
// This kata inspired by Sort rectangles and circles by area.

// My code below:

function sortByArea(array) {
  return [...array].sort((a, b) => area(a) - area(b));
}

function area(element) {
  return element.length === 2
    ? element[0] * element[1]
    : Math.PI * element ** 2;
}

// Tests

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]])); // [[1.342, 3.212],1.23,[4.23, 6.43],3.444,]
console.log(sortByArea([[2, 5], 6])); // [[2, 5], 6]
console.log(sortByArea([])); // []
