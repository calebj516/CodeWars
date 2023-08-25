// Challenge: Tail Swap (7 kyu)

// Description:

// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Challenge code below:

function tailSwap(arr) {
  const [a1, a2] = arr[0].split(':');
  const [b1, b2] = arr[1].split(':');
  
  return [`${a1}:${b2}`, `${b1}:${a2}`];
}

// Tests

console.log(tailSwap(['abc:123', 'cde:456'])); // ['abc:456', 'cde:123']);
console.log(tailSwap(['a:12345', '777:xyz'])); // ['a:xyz', '777:12345']);
console.log(tailSwap(['(:)', '[:]'])); // ['(:]', '[:)']);
console.log(tailSwap([',:;', ',:,'])); //[',:,', ',:;']);
console.log(tailSwap(['a:b', 'c:d'])); // ['a:d', 'c:b']);