// Challenge: Find the Difference in Age between Oldest and Youngest Family Members (8 kyu)

// Description:

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// Challenge code below:

function differenceInAges(ages){
	return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
}

// Tests
 
console.log(differenceInAges([16, 22, 31, 44, 3, 38, 27, 41, 88])); // [3, 88, 85]
console.log(differenceInAges([5, 8, 72, 98, 41, 16, 55])); // [5, 98, 93]
console.log(differenceInAges([57, 99, 14, 32])); // [14, 99, 85]
console.log(differenceInAges([62, 0, 3, 77, 88, 102, 26, 44, 55])); // [0, 102, 102]
console.log(differenceInAges([2, 44, 34, 67, 88, 76, 31, 67])); // [2, 88, 86]
console.log(differenceInAges([46, 86, 33, 29, 87, 47, 28, 12, 1, 4, 78, 92])); // [1, 92, 91]
console.log(differenceInAges([66, 73, 88, 24, 36, 65, 5])); // [5, 88  , 83]
console.log(differenceInAges([12, 76, 49, 37, 29, 17, 3, 65, 84, 38])); // [3, 84, 81]
console.log(differenceInAges([0, 110])); // [0, 110, 110]
console.log(differenceInAges([33, 33, 33])); // [33, 33, 0]