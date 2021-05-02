// Alan Partridge I - Partridge Watch (7 kyu)

// To celebrate today's launch of my Hero's new book: Alan Partridge: Nomad, We have a new series of kata arranged around the great man himself.

// Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

// The number of ! after the t should be determined by the number of Alan related terms you find in the provided array (x). The related terms are:

// Partridge
// PearTree
// Chat
// Dan
// Toblerone
// Lynn
// AlphaPapa
// Nomad

// If you don't find any related terms, return 'Lynn, I've pierced my foot on a spike!!'

// All Hail King Partridge

const part = (x) => {
  let count = 0; // variable to contain the number of related terms
  // This first loop loops through x to determine the number of related terms
  for (let i = 0; i < x.length; i++) {
    if (
      x[i] === "Partridge" ||
      x[i] === "PearTree" ||
      x[i] === "Chat" ||
      x[i] === "Dan" ||
      x[i] === "Toblerone" ||
      x[i] === "Lynn" ||
      x[i] === "AlphaPapa" ||
      x[i] === "Nomad"
    ) {
      count++;
    }
  }
  // If there are any related terms, add an exclamation point for each one and include with the statement from the instructions.
  // Otherwise, return the statement from the instructions.
  if (count > 0) {
    let exclamationPointsArr = [];
    for (let i = 0; i < count; i++) {
      exclamationPointsArr.push("!");
    }
    let exclamationPoints = exclamationPointsArr.join("");
    return `Mine's a Pint${exclamationPoints}`;
  } else {
    return "Lynn, I've pierced my foot on a spike!!";
  }
};

console.log(part(["Grouse", "Partridge", "Pheasant"]));
