// Challenge: Geometry Basics: Distance between points in 2D (8 kyu)

// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// Challenge code below:

function distanceBetweenPoints(a, b) {  
    return Math.sqrt((Math.abs(b.x - a.x) ** 2) + (Math.abs(a.y - b.y) ** 2));
}

const Point = {
    x : '',
    y: ''
};

// Tests

console.log(distanceBetweenPoints(new Point(    3,    3), new Point(  3,    3))); // 0
console.log(distanceBetweenPoints(new Point(    1,    6), new Point(  4,    2))); // 5
console.log(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7))); // 10.728001