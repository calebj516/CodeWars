// Challenge: Array Array Array (7 kyu)

// Description:

// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

// Challenge code below:

function explode(x){ 
  const result = [];
  let length;
  
  if(typeof x[0] == "number" && typeof x[1] == "number") {
    length = x[0] + x[1];
  } else if(typeof x[0] == "number" || typeof x[1] == "number")  {
    length = (typeof x[0] == 'number' ? x[0] : x[1]);    
  } else {
    return "Void!";
  }
  
  for(let i = 0; i < length; i++) {
    result.push(x);
  }

  return result;
}

// Tests

console.log(explode([9, 3])); // [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
console.log(explode(['a', 3])); // [['a', 3], ['a', 3], ['a', 3]]
console.log(explode([6, 'c'])); // [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
console.log(explode(['a', 'b'])); // 'Void!'
console.log(explode([1, 0])); // [[1,0]] 
console.log(explode(["a", 0])); // []