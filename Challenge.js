// Challenge: Help Suzuki count his vegetables.... (7 kyu)

// Description:

// Help Suzuki count his vegetables....

// Suzuki is the master monk of his monastery so it is up to him to ensure the kitchen is operating at full capacity to feed his students and the villagers that come for lunch on a daily basis.

// This week there was a problem with his deliveries and all the vegetables became mixed up. There are two important aspects of cooking in his kitchen, it must be done in harmony and nothing can be wasted. Since the monks are a record keeping people the first order of business is to sort the mixed up vegetables and then count them to ensure there is enough to feed all the students and villagers.

// You will be given a string with the following vegetables:

// "cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"
// Return a list of tuples with the count of each vegetable in descending order. If there are any non vegetables mixed in discard them. If the count of two vegetables is the same sort in reverse alphabetical order (Z->A).

// (119, "pepper"),
// (114, "carrot"),
// (113, "turnip"),
// (102, "onion"),
// (101, "tofu"),
// (100, "cabbage"),
// (93, "mushroom"),
// (90, "cucumber"),
// (88, "potato"),
// (80, "celery")
// Please also try the other Kata in this series..

// Help Suzuki purchase his Tofu!
// Help Suzuki pack his coal basket!
// Help Suzuki rake his garden!
// Suzuki needs help lining up his students!
// How many stairs will Suzuki climb in 20 years?

// My code below:

function countVegetables(string){
  
  const results = [];
  const validVegetables = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"]; 
  const vegetableList = string.split(' ');
  
  // filter out non-vegetables from the vegetableList
  vegetableList.filter(el => validVegetables.includes(el));
  
  // include only the valid vegetables that appear in vegetableList in the valid vegetables array
  validVegetables.filter(el => vegetableList.includes(el));
  
  // step through vegetableList and push the vegetable count and vegetable to results array
  for(let i = 0; i < validVegetables.length; i++) {
    results.push([vegetableList.filter(el => el == validVegetables[i]).length, validVegetables[i]]);  
  }
  
  // return the results sorted in desc order based on count, or reverse alphabetical if count is equivalent
  return results.sort((a, b) => b[0] - a[0] || b[1].localeCompare(a[1]));
}

// Tests

let s1 = "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage";
console.log(countVegetables(s1)); // [[2, 'tofu'], [2, 'potato'], [2, 'cucumber'], [2, 'cabbage'], [1, 'turnip'], [1, 'pepper'], [1, 'onion'], [1, 'mushroom'], [1, 'celery'], [1, 'carrot']];

let s2 = "mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber " +
"mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber " +
"onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper " +
"onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot " +
"potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip " +
"mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip"

console.log(countVegetables(s2)); // [[15, 'turnip'], [15, 'mushroom'], [13, 'cabbage'], [10, 'carrot'], [9, 'potato'], [7, 'onion'], [6, 'tofu'], [6, 'pepper'], [5, 'cucumber'], [4, 'celery']];