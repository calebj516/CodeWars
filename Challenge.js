// Challenge: Categorize New Member (7 kyu)

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Note for F#: The input will be of (int list list) which is a List<List>

// Example Input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example Output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// My Code Below

const openOrSenior = (data) => {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    // We are looking at index 0 and 1 for each element in data
    data[i][0] >= 55 && data[i][1] > 7
      ? result.push("Senior")
      : result.push("Open");
  }
  return result;
};

// Tests below

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
); // Returns ["Open", "Open", "Senior", "Open", "Open", "Senior"]
