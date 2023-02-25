// Challenge: Sum a list but ignore any duplicates (7 kyu)

// Description:

// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

// My code below:

const sumNoDuplicates = (numList) => {
  const numListFiltered = numList.filter(
    (num, idx, arr) => arr.indexOf(num) == arr.lastIndexOf(num)
  );

  return numListFiltered.reduce((total, current) => total + current, 0);
};

// Notes on logic

// including only the numbers that have an equal index and last index (i.e. the number in question) excludes duplicates

// Tests

console.log(
  sumNoDuplicates([0, 1, 4, 4, 0, 4, 2, 5, 9, 0, 10, 9, 0, 1, 2]) // 15
);

console.log(
  sumNoDuplicates([7, 2, 10, 9, 10, 2, 7, 3, 10, 8, 2, 5]) // 25
);

console.log(
  sumNoDuplicates([7, 2, 0, 3, 5, 7, 8, 3, 2, 10, 9, 5]) // 27
);

console.log(
  sumNoDuplicates([1, 9, 9, 5, 7, 7, 6, 1, 5, 6]) // 0
);
