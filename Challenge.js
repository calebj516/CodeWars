// Challenge: Multiplication table (6 kyu)

// Instructions:

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// My code below:

const multiplicationTable = size => {

  let result = [];

  for(let row = 1; row <= size; row++){
    let innerArr = [];
      for(let col = 1; col <= size; col++){
        innerArr.push(col*row);
      }
      result.push(innerArr);
    }

  return result;

}

// Tests below:

console.log(multiplicationTable(3)); // [[1,2,3],[2,4,6],[3,6,9]]
console.log(multiplicationTable(4)); // [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]]