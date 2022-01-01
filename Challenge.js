// Challenge: Rock Paper Scissors! (8 kyu)

// Description:

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

// My code below:

const rps = (p1, p2) => {

  let rules = {rock: "scissors", paper: "rock", scissors: "paper"};

  if(p1 === p2){
    return "Draw!"
  } else if(p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }

}

// Tests

// Player 1 Win

console.log(rps('rock', 'scissors')); 
console.log(rps('scissors', 'paper')); 
console.log(rps('paper', 'rock')); 

// Player 2 Win

console.log(rps('scissors', 'rock')); 
console.log(rps('paper', 'scissors')); 
console.log(rps('rock', 'paper')); 

// Draw

console.log(rps('rock', 'rock'));
console.log(rps('scissors', 'scissors'));
console.log(rps('paper', 'paper'));

