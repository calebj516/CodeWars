// Challenge: Number-Star ladder (7 kyu)

// Description:

// Task

// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):

// Note: There is no newline in the end (after the pattern ends)

// Examples
// pattern(3) should return "1\n1*2\n1**3", e.g. the following:

// 1
// 1*2
// 1**3
// pattern(10): should return the following:

// 1
// 1*2
// 1**3
// 1***4
// 1****5
// 1*****6
// 1******7
// 1*******8
// 1********9
// 1*********10

// My code below:

function pattern(n) {
  let output = "";
  let asterisk = "*";

  for (let i = 0; i < n; i++) {
    i === 0
      ? (output += `${i + 1}\n`)
      : i > 0 && i < n - 1
      ? (output += `1${asterisk.repeat(i)}${i + 1}\n`)
      : (output += `1${asterisk.repeat(i)}${i + 1}`);
  }

  return output;
}

// Tests
console.log(pattern(10)); // see kata description
