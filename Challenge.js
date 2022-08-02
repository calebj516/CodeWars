// Challenge: Message Validator (6 kyu)

// Description:

// In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

// For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

// Notes:

// Messages are composed of only letters and digits
// Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
// Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
// If the message is an empty string, you should return true

// My code below:

function isAValidMessage(message){
    // if there is a message, proceed
    if(message){
      let messageArr = message.split(/(\d+)/);
    // loop through the message
      for(let i = 0; i < messageArr.length - 1; i++){
        // if the element is truthy AND a number, test if its length is equal to the length of the following string
        if(messageArr[i] && Number.isInteger(+messageArr[i])){
          if(messageArr[i + 1].length !== +messageArr[i]) return false;
        }
      }
      // if the message is processed without returning false, we know the message is valid and this return statement will run.
      return true;    
    }
    // if the message is falsy (i.e. an empty string), this return statement will run
    return true;  
}

// Tests

console.log(isAValidMessage("3hey5hello2hi")); // true
console.log(isAValidMessage("4code13hellocodewars")); // true
console.log(isAValidMessage("3hey5hello2hi5")); // false
console.log(isAValidMessage("code4hello5")); // false
console.log(isAValidMessage("1a2bb3ccc4dddd5eeeee")); // true
console.log(isAValidMessage("")); // true