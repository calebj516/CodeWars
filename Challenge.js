// Challenge: Round up to the next multiple of 5 (7 kyu)

// Description:
// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// My code below:

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

// Tests below:
console.log(roundToNext5(8)); // 10
console.log(roundToNext5(-8)); // -10
