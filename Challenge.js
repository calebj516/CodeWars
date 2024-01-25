// Challenge: Basic Math (Add or Subtract) - (7 kyu)

// Description:

// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples

// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

// Challenge code below:

const calculate = str => {
    const nums = str.split(/plus|minus/);
    const ops = str.match(/plus|minus/g);

    let sum = Number(nums[0]);

    for(let i = 0; i < ops.length; i++) {
        if(ops[i] == 'plus') sum += Number(nums[i + 1]);
        if(ops[i] == 'minus') sum -= Number(nums[i + 1]);
    }

    return sum.toString();
}

// Tests

console.log(calculate("1plus2plus3plus4")); // '10'
console.log(calculate('1minus2minus3minus4')); // '-8'
console.log(calculate('1plus2plus3minus4')); // '2'
console.log(calculate('1minus2plus3minus4')); // '-2'
console.log(calculate('1plus2minus3plus4minus5')); // '-1'