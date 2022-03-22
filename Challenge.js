// Challenge: Arabian String (6 kyu)

// Description:

// You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

// Don't presume the separators too much or you could be surprised.

// For example: (Input --> Output)

// "example name" --> "ExampleName"
// "your-NaMe-here" --> "YourNameHere"
// "testing ABC" --> "TestingAbc"

// My code below:

function camelize(str) {
  if (str) {
    return str
      .match(/[a-z0-9]+/gi)
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join("");
  }
  return str;
}

// Tests

console.log(camelize("john doe")); // "JohnDoe"
console.log(camelize("frank peas")); // "FrankPeas"
console.log(camelize("Rugby:Club:2013")); // "RugbyClub2013"
console.log(camelize("Arabian_String-Test")); // "ArabianStringTest"
console.log(camelize("Ninja-Test--01")); // "NinjaTest01"
console.log(camelize("'quOted' => 'What'")); // "QuotedWhat"
console.log(camelize("dir/for/data")); // "DirForData"
