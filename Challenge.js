// Challenge: Bumps in the Road (7 kyu)

// Description:

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

// My code below:

const bump = (x) => {
  // count number of bumps, if greater than 15 return Car Dead
  let count = 0;
  x = x.split("");
  // loop through x
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "n") {
      count++;
    }
  }
  return count > 15 ? "Car Dead" : "Woohoo!";
};

// Tests
console.log(bump("n")); // "Woohoo!"
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")); // "Car Dead"
console.log(bump("______n___n_")); // "Woohoo!"
console.log(bump("nnnnnnnnnnnnnnnnnnnnn")); // "Car Dead";
