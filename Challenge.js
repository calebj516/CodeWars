// Challenge: Spot the Differences (7 kyu)

// Description:

// This kata is part of the collection Mary's Puzzle Books.

// Mary brought home a "spot the differences" book. The book is full of a bunch of problems, and each problem consists of two strings that are similar. However, in each string there are a few characters that are different. An example puzzle from her book is:

// String 1: "abcdefg"
// String 2: "abcqetg"
// Notice how the "d" from String 1 has become a "q" in String 2, and "f" from String 1 has become a "t" in String 2.

// It's your job to help Mary solve the puzzles. Write a program spot_diff/Spot that will compare the two strings and return a list with the positions where the two strings differ. In the example above, your program should return [3, 5] because String 1 is different from String 2 at positions 3 and 5.

// NOTES:

// If both strings are the same, return []

// Both strings will always be the same length

// Capitalization and punctuation matter

// Challenge code below:

function spot(s1,s2){
	const result = [];
	
	for(let i = 0; i < s1.length; i++) {
	  if(s1[i] != s2[i]) result.push(i);
	}
	
	return result;
}

// Tests

console.log(spot('abcdefg', 'abcqetg')); // [3, 5]
console.log(spot('Hello World!', 'hello world.')); // [0, 6, 11]
console.log(spot('FixedGrey', 'FixedGrey')); // []
console.log(spot('HACKER', 'H4CK3R')); // [1, 4]
console.log(spot('This is a really long sentence.', 'That is a_really long sentence,')); // [2, 3, 9, 30]
console.log(spot('', '')); // []
console.log(spot('abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcba')); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
console.log(spot('YOLO lol', 'ROLO mom')); // [0, 5, 7]
console.log(spot('www.youtube.com/zedaphplays', 'www.twitter.com/zedaphplays')); // [4, 5, 6, 8, 9, 10]
console.log(spot('Congratulations! You did it!', 'Conglaturations! U did this!')); // [4, 8, 17, 18, 19, 20, 22, 23, 24, 26]