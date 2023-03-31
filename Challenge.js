// Challenge: Insert Dashes (7 kyu)

// Description:

// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

// My code below:

const insertDash = num => {
  num = num.toString().split('');

  for(let i = 0; i < num.length; i++) {
    if(parseInt(num[i]) % 2 > 0 && parseInt(num[i + 1]) % 2 > 0) {
      num[i] += '-';
    }
  }
  
  return num.join('');
}

// Tests

console.log(insertDash(454793)); // '4547-9-3'
console.log(insertDash(123456)); // '123456'
console.log(insertDash(1003567)); // '1003-567'
