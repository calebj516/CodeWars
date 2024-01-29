// Challenge: Offload your work! (7 kyu)

// Description:

// You are the best freelancer in the city. Everybody knows you, but what they don't know, is that you are actually offloading your work to other freelancers and and you rarely need to do any work. You're living the life!

// To make this process easier you need to write a method called workNeeded to figure out how much time you need to contribute to a project.

// Giving the amount of time in minutes needed to complete the project and an array of pair values representing other freelancers' time in [Hours, Minutes] format ie. [[2, 33], [3, 44]] calculate how much time you will need to contribute to the project (if at all) and return a string depending on the case.

// If we need to contribute time to the project then return "I need to work x hour(s) and y minute(s)"
// If we don't have to contribute any time to the project then return "Easy Money!"

// Challenge code below:

function workNeeded(projectMinutes, freelancers){
  let freelanceMinutes = 0;
  
  for(let i = 0; i < freelancers.length; i++) {
    freelanceMinutes += ((freelancers[i][0] * 60) + freelancers[i][1]);
  } 

  const totalMinutes = projectMinutes - freelanceMinutes;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return projectMinutes > freelanceMinutes ? `I need to work ${hours} hour(s) and ${minutes} minute(s)` : "Easy Money!";
}

// Tests

console.log(workNeeded(60, [[1,0]])); // "Easy Money!"
console.log(workNeeded(60, [[0,0]])); // "I need to work 1 hour(s) and 0 minute(s)"
console.log(workNeeded(141, [[1,55], [0,25]])); // "I need to work 0 hour(s) and 1 minute(s)"
console.log(workNeeded(2000, [[1,55], [0,25], [1, 10]])); // "I need to work 29 hour(s) and 50 minute(s)"
console.log(workNeeded(2500, [[1,55], [0,25], [1, 10], [3, 14], [2, 6]])); // "I need to work 32 hour(s) and 50 minute(s)"