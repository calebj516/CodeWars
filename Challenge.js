// Small enough? - Beginner Challenge (7 kyu)

// Instructions:

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

const smallEnough = (a, limit) => {
  // Declare variable to keep track of if an element is true
  let flag = false;
  // This do while loop loops through the array.
  // If an element is greater than the limit, go ahead and return false.
  // Otherwise, proceed to the next element and set the flag to true.
  // If the loop exits we know that all elements have passed the test.
  let i = 0;
  do {
    if (a[i] > limit) {
      return false;
    } else {
      i++;
      flag = true;
    }
  } while (i < a.length);
  return flag;
};

// Tests
console.log(smallEnough([66, 101], 200)); // true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)); // true
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)); // true
