// Challenge: Alphabet war (7 kyu)

// Description:

// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

// My code below:

const alphabetWar = fight => {
  const scoring = {'w' : -4, 'p' : -3, 'b' : -2, 's' : -1, 'm' : 4, 'q' : 3, 'd' : 2, 'z' : 1};
  let score = fight.replace(/[^wpbsmqdz]/g, '').split('').reduce((total, current) => total + scoring[current], 0);

  return score < 0 ? "Left side wins!" : score > 0 ? "Right side wins!" : "Let's fight again!";
}

// Tests

console.log(alphabetWar("z")); //=> Right side wins!
console.log(alphabetWar("zdqmwpbs")); //=> Let's fight again!
console.log(alphabetWar("zzzzs")); //=> Right side wins!
console.log(alphabetWar("wwwwwwz"));  //=> Left side wins!
