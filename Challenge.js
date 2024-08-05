// Challenge: Return the day (8 kyu)

// Description:

// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

// Challenge code below:

function whatday(num) { 

    const days = {
      1 : 'Sunday',
      2 : 'Monday',
      3 : 'Tuesday',
      4 : 'Wednesday',
      5 : 'Thursday',
      6 : 'Friday',
      7 : 'Saturday'
    };
  
    return days[num] || 'Wrong, please enter a number between 1 and 7';
}

// Tests

console.log(whatday(1)); //'Sunday'
console.log(whatday(2)); // 'Monday'
console.log(whatday(3)); //'Tuesday'
console.log(whatday(4)); //  'Wednesday'
console.log(whatday(5)); //  'Thursday'
console.log(whatday(6)); //  'Friday'
console.log(whatday(7)); //  'Saturday'
console.log(whatday(0)); //  'Wrong, please enter a number between 1 and 7'
console.log(whatday(8)); //  'Wrong, please enter a number between 1 and 7'
console.log(whatday(20)); //  'Wrong, please enter a number between 1 and 7'