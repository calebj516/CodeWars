// Challenge: Ghostbusters (whitespace removal) (7 kyu)

// Description:

// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

// Example:

// ghostBusters("Sky scra per");
// Should return:

// "Skyscraper"
// If the building contains no ghosts, return the string:

// "You just wanted my autograph didn't you?"

// My code below:

// Logic: if the building string is not equal to the same string with whitespace removed, then we know that whitespace characters are present that need to be removed. Else, return the string specified in the instructions.
const ghostBusters = (building) =>
  building.replace(/\s/g, "") !== building
    ? building.replace(/\s/g, "")
    : "You just wanted my autograph didn't you?";

// Tests

console.log(ghostBusters("Factor y")); // "Factory"
console.log(ghostBusters("O  f fi ce")); // "Office"
console.log(ghostBusters("BusStation")); // "You just wanted my autograph didn't you?"
