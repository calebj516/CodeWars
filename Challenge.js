// Challenge: Difference between two collections (7 kyu)

// Description:

// Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

// The collections can contain any character and can contain duplicates.

// Example
// A = [a, a, t, e, f, i, j]

// B = [t, g, g, i, k, f]

// difference = [a, e, g, j, k]

// Challenge code below:

function diff(a, b){
    //your code here
    let difference = [];
    
    for(let i = 0; i < a.length; i++) {
      if(!b.includes(a[i])) difference.push(a[i]);
    }
    
    for(let i = 0; i < b.length; i++) {
      if(!a.includes(b[i])) difference.push(b[i]);
    }
    
    return [...new Set(difference)].sort();
}

// Tests
 
console.log(diff(['a', 'b'], [])); // ['a', 'b']
console.log(diff([], ['a', 'b'])); // ['a', 'b']
console.log(diff(['a', 'b', 'z'], ['a', 'b'])); // ['z']
console.log(diff(["a","b","z","d","e","d"], ["a","b", "j","j"])); // ["d","e","j","z"]