// Challenge: Leap Years (7 kyu)

// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.

// Challenge code below:

function isLeapYear(year) {
  if(divisibleBy400(year) || divisibleBy4(year) && !divisibleBy100(year)) return true;
  return false;
}

function divisibleBy4(year) {
  return year % 4 == 0;
}

function divisibleBy400(year) {
  return year % 400 == 0;
}

function divisibleBy100(year) {
  return year % 100 == 0;
}

// Tests

console.log(isLeapYear(2020)); //true
console.log(isLeapYear(1824)); //true
console.log(isLeapYear(2152)); //true
console.log(isLeapYear(1600)); //true
console.log(isLeapYear(2000)); //true
console.log(isLeapYear(4000)); //true
console.log(isLeapYear(1800)); //false
console.log(isLeapYear(1900)); //false
console.log(isLeapYear(2100)); //false
console.log(isLeapYear(2200)); //false
console.log(isLeapYear(1821)); //false
console.log(isLeapYear(1942)); //false
console.log(isLeapYear(2113)); //false
console.log(isLeapYear(2254)); //false