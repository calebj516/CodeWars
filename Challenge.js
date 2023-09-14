// Challenge: We've crashed on a distance planet in our galaxy! When do leap years occur here? (7 kyu)

// https://www.codewars.com/kata/596c6eb85b0f515834000049/javascript

// Description:

// Our spaceship has crashed on an unknown planet many light years away from earth. Thankfully we were able to send out a distress signal right before the crash. Help will be here shortly but we need to gather as much information about this planet as we can before we're rescued.

// Before our control panels were destroyed, we were able to gather the duration of this planet's orbit around it's planetary system's star.

// Among other things, we need to determine if a given year is a leap year on this planet.

// Your Task:

// Given the duration of the planet's orbit (in days) and a specific year on this planet, determine if the given year is a leap year here.

// For example:

// On Earth, a single rotation around the sun takes 365.25 days. Therefore, each year takes 365 days but every forth year is a leap year and takes 366 days. The next leap year on Earth will occur in 2020.

// Notes: To make things easier, the period of the leap years will always be a power of 2. Good luck!

// Challenge code below:

const isLeapYear = (duration, year) => !(year % (1 / (duration % 1)));

// Tests

console.log(isLeapYear(365.25, 2018)); // false
console.log(isLeapYear(365.25, 2020)); // true
console.log(isLeapYear(124.5,   102)); // true
console.log(isLeapYear(124.125, 102)); // false