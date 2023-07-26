// Challenge: Who ate the cookie? (8 kyu)

// Description:

// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// Note: Make sure you return the correct message with correct spaces and punctuation.

// Please leave feedback for this kata. Cheers!

// My code below:

function cookie(x){
  let answer = "";
  
  if(typeof x == "string") {
    answer = "Zach!"    
  } else if(typeof x == "number") {
    answer = "Monica!";
  } else {
    answer = "the dog!";
  }
  
  return `Who ate the last cookie? It was ${answer}`;
}

// Tests

console.log(cookie("Ryan")); // "Who ate the last cookie? It was Zach!"
console.log(cookie(2.3)); // "Who ate the last cookie? It was Monica!"
console.log(cookie(26)); // "Who ate the last cookie? It was Monica!"
console.log(cookie(true)); // "Who ate the last cookie? It was the dog!"
console.log(cookie("true")); // "Who ate the last cookie? It was Zach!"
console.log(cookie(false)); // "Who ate the last cookie? It was the dog!"
console.log(cookie(1.98528462)); //"Who ate the last cookie? It was Monica!"