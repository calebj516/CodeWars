// Challenge: Take a Ten Minutes Walk (6 kyu)

// Description:

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// My code below:

const isValidWalk = walk => {
  // if the walk is not exactly 10 steps, it did not take 10 minutes.
  if(walk.length !== 10) return false;
  // variables: distance x, distance y
  let dx = 0, dy = 0;
  // loop through each step in the walk. 
  // Moving north is equivalent to an increase on the y-axis, moving east is an increase on the x-axis. The opposites are true for south and west.
  for(let i = 0; i < walk.length; i++) {
    switch(walk[i]) {
      case 'n' : dy++; break;
      case 'e' : dx++; break;
      case 's' : dy--; break;
      case 'w' : dx--; break;
    }
  }
  // If the user returns to the same location (0, 0), we know that dx and dy must both be zero
  return dx === 0 && dy === 0;
}

// Tests

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // 'should return true'
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); // 'should return false'
console.log(isValidWalk(['w'])); // 'should return false'
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); // 'should return false'
