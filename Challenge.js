// Challenge: Multiplication Tables (6 kyu)

// Instructions:

// Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

// Example:

// multiplication_table(3,3)

// 1 2 3
// 2 4 6
// 3 6 9

// -->[[1,2,3],[2,4,6],[3,6,9]]

// Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.

// My code below:

function multiplicationTable(row, col) {
  // Array to hold final result
  let result = [];
  for (let r = 1; r <= row; r++) {
    // Array to hold result of one row
    let arr = [];
    for (let c = 1; c <= col; c++) {
      arr.push(c * r);
    }
    // Push result of one row to the result array and repeat
    result.push(arr);
  }
  return result;
}

// Tests below:

console.log(multiplicationTable(2, 2));
console.log(multiplicationTable(3, 3));
console.log(multiplicationTable(3, 4));
console.log(multiplicationTable(4, 4));
console.log(multiplicationTable(2, 5));
