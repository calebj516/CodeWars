// Challenge: Triangle area (7 kyu)

// Task:

// Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.

// Hints

// Ignore dots.

// Example:

// .
// .      .
// .      .       .      ---> should return 2.0

// .
// .      .
// .      .       .
// .      .       .      .      ---> should return 4.5

// My code:

function tArea(tStr) {
  // Read tStr into an array.
  let triangleArr = tStr.split("");
  // Count the number of newline characters, excluding the first and last
  let count = 0;
  for (let i = 1; i < triangleArr.length - 1; i++) {
    if (triangleArr[i] === "\n") {
      count++;
    }
  }
  // Calculate the area
  let triangleArea = (count * count) / 2;
  return triangleArea;
}

// Tests

console.log(tArea("\n.\n. .\n")); // return 0.5
console.log(tArea("\n.\n. .\n. . .\n")); // return 2
console.log(
  tArea(
    "\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n"
  )
); // return 32
