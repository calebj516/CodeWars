// Challenge: Get Planet Name By ID (8 kyu)

// Challenge code below:

function getPlanetName(id){
  let name;
  switch(id){
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
    default:
      name = 'Invalid ID entry! Please try again.';
  }
  
  return name;
}

// Tests

console.log(getPlanetName(1)); // Mercury
console.log(getPlanetName(2)); // Venus
console.log(getPlanetName(3)); // Earth
console.log(getPlanetName(4)); // Mars
console.log(getPlanetName(5)); // Jupiter
console.log(getPlanetName(6)); // Saturn
console.log(getPlanetName(7)); // Uranus
console.log(getPlanetName(8)); // Neptune
console.log(getPlanetName(9)); // Invalid ID entry! Please try again.