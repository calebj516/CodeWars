// Challenge: Remove consecutive duplicate words (7 kyu)

// Description:

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// My code below:

const removeConsecutiveDuplicates = s => {
  // filter out elements that are equal to the following element
  return s.split(' ').filter((word, index, array) => word !== array[index + 1]).join(' ');
}

// Tests

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')); // 'alpha beta gamma delta alpha beta gamma delta');
