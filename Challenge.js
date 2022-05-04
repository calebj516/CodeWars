// Challenge: List of Presents (7 kyu)

// Description:

// Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

// Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.

// _ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

// My code below:

function howManyGifts(maxBudget, gifts){
    // sort gifts in ascending order
    gifts.sort((num1, num2) => num1 - num2);
    // include only the values such that when subtracted from the max budget are greater than or equal to zero (max budget decreases as each number is processed)
    return gifts.filter(num => (maxBudget -= num) >= 0).length;
}

// Tests

console.log(howManyGifts(20, [13, 2, 4, 6, 1])); // 4

// Example for above test: 
    // sorted values are: 1, 2, 4, 6, 13
    // 20 - 1 = 19 => Pass
    // 19 - 2 = 17 => Pass
    // 17 - 4 = 13 => Pass
    // 13 - 6 = 7 => Pass
    // 7 - 13 = -6 => Fail
    // return 4

console.log(howManyGifts(90, [87, 3, 5, 25, 1, 3, 4, 6, 20])); // 8
console.log(howManyGifts(100, [6, 94, 10, 45, 2, 4, 5, 6, 8, 1])); // 9

