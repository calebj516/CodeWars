// Challenge: Some (but not all) (7 kyu)

// Description:

// Your task is to create a function that given a sequence and a predicate, returns True if only some (but not all) the elements in the sequence are True after applying the predicate

// Examples

// ('abcdefg&%$', x -> isLetter(x)) == true
// ('&%$=', x -> isLetter x) == false
// ('abcdefg', x -> isLetter x) == false

// ([4, 1], x -> x > 3) == true
// ([1, 1], x -> x > 3) == false
// ([4, 4], x -> x > 3) == false

// Challenge code below:

const someButNotAll = (seq, pred) => {
    seq = Array.from(seq);
    return seq.some(pred) && !seq.every(pred);
}

// Tests

console.log(someButNotAll('abcdefg&%$', str => /[a-z]/i.test(str))); //true
console.log(someButNotAll('&%$=', str => /[a-z]/i.test(str))); //false
console.log(someButNotAll('abcdefg', str => /[a-z]/i.test(str))); // false
console.log(someButNotAll([4, 1], x => x>3)); // true
console.log(someButNotAll([1, 1], x => x>3)); // false
console.log(someButNotAll([4, 4], x => x>3)); // false