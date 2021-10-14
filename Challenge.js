// Challenge: Even or Odd, Which is Greater? (7 kyu)

// Instructions:

// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

// My code below:

function evenOrOdd(str) {

  let evenTotal = 0;
  let oddTotal = 0;
  let numbers = str.split("");
  
  for(let i = 0; i < numbers.length; i++){
    // adding a '+' symbol converts strings into numbers.
    +numbers[i] % 2 === 0 ? evenTotal += +numbers[i] : oddTotal += +numbers[i];
  }
    
  if(evenTotal > oddTotal){
    return "Even is greater than Odd";
  } else if(oddTotal > evenTotal){
    return "Odd is greater than Even";
  } else {
    return "Even and Odd are the same";
  }
  
}

// Tests below:

console.log(evenOrOdd('12' )); // 'Even is greater than Odd' 
console.log(evenOrOdd('123' )); // 'Odd is greater than Even' 
console.log(evenOrOdd('112' )); // 'Even and Odd are the same' 
console.log(evenOrOdd('1213896664' )); // 'Even is greater than Odd' 
console.log(evenOrOdd('12399124677' )); // 'Odd is greater than Even' 
console.log(evenOrOdd('7768' )); // 'Even and Odd are the same' 
console.log(evenOrOdd('999988888444' )); // 'Even is greater than Odd' 
console.log(evenOrOdd('11111111112' )); // 'Odd is greater than Even' 
console.log(evenOrOdd('5578843' )); // 'Even and Odd are the same' 
console.log(evenOrOdd('44590258866' )); // 'Even is greater than Odd' 
console.log(evenOrOdd('91867' )); // 'Odd is greater than Even' 
console.log(evenOrOdd('7247756662' )); // 'Even and Odd are the same' 
console.log(evenOrOdd('834' )); // 'Even is greater than Odd' 
console.log(evenOrOdd('964279' )); // 'Odd is greater than Even' 
console.log(evenOrOdd('989899686' )); // 'Even and Odd are the same' 
console.log(evenOrOdd('124326546547649683563465' )); // 'Even is greater than Odd' 
console.log(evenOrOdd('23646531353253475361352437562453' )); // 'Odd is greater than Even' 
console.log(evenOrOdd('663333' )); // 'Even and Odd are the same' 
console.log(evenOrOdd('87536234' )); // 'Even is greater than Odd' 
console.log(evenOrOdd('9998378356372' )); // 'Odd is greater than Even' 
console.log(evenOrOdd('88188777752' )); // 'Even and Odd are the same' 
console.log(evenOrOdd('46575888345254788864' )); // 'Even is greater than Odd' 
console.log(evenOrOdd('35345679867564' )); // 'Odd is greater than Even' 
console.log(evenOrOdd('3222111' )); // 'Even and Odd are the same' 
