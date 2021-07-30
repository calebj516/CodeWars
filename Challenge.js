// Challenge: Highest Rank Number in an Array (6 kyu)

// Instructions:

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// My code below:

function highestRank(arr) {
  let mf = 1; // most frequent set to 1 because each element in the array appears once.
  let m = 0; // this is a counter to track the number of appearances
  let item; // this will hold the most frequent element
  for (
    // first for loop iterates over each element in arr
    let i = 0;
    i < arr.length;
    i++
  ) {
    for (
      // second for loop compares each element in arr to current value of arr[i]
      let j = i;
      j < arr.length;
      j++
    ) {
      if (arr[i] == arr[j]) m++; // if the element in arr[i] appears again, increment the counter
      if (mf < m) {
        mf = m; // if counter m is greater than most frequent, assign value of m to most frequent.
        item = arr[i]; // the current value of arr[i] being compared to each value in arr is the most frequent.
      }
    }
    m = 0; // reset counter to 0, increment to next element in arr (first for loop), and compare it to each element (second for loop).
  }
  return item; // at the end of the day item will hold the most frequent number; return it.
}

// Tests below:

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // 12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); // 3
