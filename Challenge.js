// Challenge: Lottery Ticket (6 kyu)

// Instructions:

// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

// My code below:

function bingo(ticket, win) {
  let winCount = 0;
  let subArray = 0; // example: ['ABC', 65]
  let string = 0; // example: 'ABC'
  let code = 1; // example: 65

  // loop through ticket
  for (let i = subArray; i < ticket.length; i++) {
    // loop through string.
    for (let char = 0; char < ticket[subArray][string].length; char++) {
      // if char code of any characters matches number, add one to mini-win count.
      if (
        ticket[subArray][string][char].charCodeAt(
          ticket[subArray][string][char]
        ) === ticket[subArray][code]
      ) {
        winCount += 1;
        // Break the loop if there is a mini-win due to mini-win limit of one per sub array.
        break;
      }
    }
    // Increment subArray by one to advance to the next sub array within the ticket array.
    subArray++;
  }
  // check mini win total. If it is greater than or equal to win, return Winner.
  return winCount >= win ? "Winner!" : "Loser!";
}

// Tests below:

console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2
  )
); // Loser!
console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    1
  )
); // Winner!
console.log(
  bingo(
    [
      ["HGTYRE", 74],
      ["BE", 66],
      ["JKTY", 74],
    ],
    3
  )
); // Loser!
