// Challenge: Round by 0.5 steps (6 kyu)

// Instructions:

// Round any given number to the closest 0.5 step

// I.E.

// solution(4.2) = 4
// solution(4.3) = 4.5
// solution(4.6) = 4.5
// solution(4.8) = 5
// Round up if number is as close to previous and next 0.5 steps.

// solution(4.75) == 5

// My code below:

function solution(n){

  // split at period, but prepend to the result to maintain decimal form
  let decimal = '.' + n.toString().split(".")[1];
  // If decimal is greater than or equal to .75, add 1 to Math.floor(n)
  // If greater than or equal to .25, add 0.5 to Math.floor(n)
  // Else round down by returning the result of Math.floor(n)
  if(decimal >= 0.75){
    return Math.floor(n) + 1;
  } else if(decimal >= 0.25){
    return Math.floor(n) + 0.5;
  } else {
    return Math.floor(n);
  }
  
}

// Tests below:

console.log(solution(4.2)); // 4
console.log(solution(4.3)); // 4.5
console.log(solution(4.6)); // 4.5
console.log(solution(4.8)); // 5