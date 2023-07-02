// Challenge: Reversed Words (8 kyu)

// Description:

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// My code below:

const reverseWords = str => str.split(' ').reverse().join(' ');

// Notes on logic:

// In order to reverse the words, which are separated by spaces in str, we need to specify this as the delimiter in the split and join functions.
// Not specifying this, and doing something like split('') and join(''), will reverse the letters and cause the solution to fail.

// Tests

console.log(reverseWords("hello world!"                 )); //  "world! hello"
console.log(reverseWords("yoda doesn't speak like this" )); //  "this like speak doesn't yoda"
console.log(reverseWords("foobar"                       )); //  "foobar"
console.log(reverseWords("kata editor"                  )); //  "editor kata"
console.log(reverseWords("row row row your boat"        )); //  "boat your row row row"
console.log(reverseWords(""                             )); //  ""