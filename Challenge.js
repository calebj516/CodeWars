// Challenge: Comfortable Words (7 kyu)

// Instructions:

// Description:
// A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a QWERTY keyboard and use fingers as shown in the image below).

// That being said, complete the function which receives a word and returns true if it's a comfortable word and false otherwise.

// The word will always be a string consisting of only ascii letters from a to z.

// To avoid problems with image availability, here's the lists of letters for each hand:

// Left: q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
// Right: y, u, i, o, p, h, j, k, l, n, m

// My code below:

const comfortable_word = (word) => {
  let left = "qwertasdfgzxcvb";
  let wordArr = word.split(""); // split word into an array.
  let isComfortable = true; // boolean to hold status of word.

  // map over wordArr, changing each character into left or right based on if it is included in the left variable.
  wordArr = wordArr.map((char) => (left.includes(char) ? "left" : "right"));

  // loop through wordArr, comparing each element to the following element.
  for (let i = 0; i < wordArr.length; i++) {
    // if the element matches the following element, then we know it does not meet the criteria specified by the challenge: alternating left and right characters.
    if (wordArr[i] === wordArr[i + 1]) {
      isComfortable = false;
    }
  }
  // By default isComfortable is true, but if the condition on line 30 is successful, then it will return false.
  return isComfortable;
};

// Tests below:

console.log(comfortable_word("kris")); // true
console.log(comfortable_word("yams")); // true
console.log(comfortable_word("test")); // false
