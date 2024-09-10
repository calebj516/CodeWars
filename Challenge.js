// Challenge: Grader (8 kyu)

// Description:

// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade

// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"

// Examples:

// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"

// Challenge code below:

function grader(score) {
    switch(true) {
        case score > 1 || score < 0.6:
          return "F";
          break;
        case score >= 0.9:
          return "A";
          break;
        case score >= 0.8:
          return "B";
          break;
        case score >= 0.7:
          return "C";
          break;
        case score >= 0.6:
          return "D";
          break;
        default:
          return "Invalid input. Please try again.";
    }
}

// Tests

console.log(grader(1)); // "A"
console.log(grader(1.01)); // "F"
console.log(grader(0.2)); // "F"
console.log(grader(0.7)); // "C"
console.log(grader(0.8)); // "B"
console.log(grader(0.9)); // "A"
console.log(grader(0.6)); // "D"
console.log(grader(0.5)); // "F"
console.log(grader(0)); // "F"