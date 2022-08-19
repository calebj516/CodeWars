// Challenge: Switcheroo (7 kyu)

// Description:

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// My code below:

function switcheroo(x) {
  return x
    .split("")
    .map((el) => {
      if (el == "a") return "b";
      if (el == "b") return "a";
      if (el == "c") return "c";
    })
    .join("");
}

// Tests

console.log(switcheroo("abc")); // "bac"
console.log(switcheroo("aaabcccbaaa")); // "bbbacccabbb"
console.log(switcheroo("ccccc")); // "ccccc"
console.log(switcheroo("abababababababab")); // "babababababababa"
console.log(switcheroo("aaaaa")); // "bbbbb"
