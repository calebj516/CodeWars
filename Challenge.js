// Challenge: Holiday III - Fire on the boat (7 kyu)

// Description:

// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

// My code below:

const fireFight = (s) => s.replace(/Fire/g, "~~");

// Tests

console.log(
  fireFight(
    "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"
  )
); // "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast"
console.log(fireFight("Mast Deck Engine Water Fire")); // "Mast Deck Engine Water ~~"
console.log(
  fireFight(
    "Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"
  )
); // ~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain"
console.log(fireFight("Boat Deck Boat")); // "Boat Deck Boat"
console.log(fireFight("Fire Boat Captain")); // "~~ Boat Captain"
