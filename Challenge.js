// Challenge: Coding 3min: Bug in Apple (7 kyu)

// Description:

// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version.

// Task:
// Find out "B"(Bug) in a lot of "A"(Apple).

// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

// input: string Array apple

// output: Location of "B", [x,y]

// My code below:

function sc(apple){
    for(let i = 0; i < apple.length; i++){
        for(let j = 0; j < apple[i].length; j++){
            if(apple[i][j] === 'B') return [i, j];
        }
    }
}

// Tests

console.log(sc([["B","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]])); // [0,0]

console.log(sc([["A","A","A","A","A"],
["A","B","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]])); // [1,1]

console.log(sc([["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","B","A","A","A"]])); // [4,1]
