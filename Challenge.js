// Challenge: Correct the mistakes of the character recognition software (7 kyu)

// Description:

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter)); // are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Challenge code below:

const correct = (string) => string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');

// Tests

console.log(correct("1F-RUDYARD K1PL1NG")); //"IF-RUDYARD KIPLING"
console.log(correct("R0BERT MERLE - THE DAY 0F THE D0LPH1N")); //"ROBERT MERLE - THE DAY OF THE DOLPHIN"
console.log(correct("R1CHARD P. FEYNMAN - THE FEYNMAN LECTURE5 0N PHY51C5")); //"RICHARD P. FEYNMAN - THE FEYNMAN LECTURES ON PHYSICS"