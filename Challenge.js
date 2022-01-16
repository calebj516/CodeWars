// Challenge: Coin Combination Calculator (7 kyu)

// Description:

// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickels ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25

// So for example:
// coinCombo(6) --> [1, 1, 0, 0]

// My code below:

function coinCombo(cents) {
  let coins = [1,5,10,25];
  let result = [0,0,0,0];
  for (let i = 3; i >= 0 && cents > 0; i--) {
    // if cents is less than coins then the result will be zero and the cents total will not be affected.
    // on the other hand, if cents is greater than coins, then Math.floor will correctly calculate the minimum number of coins to contribute towards cents.
    result[i] = Math.floor(cents / coins[i]);
    // subtract the result multiplied by the value of currency. Once cents hits zero the loop stops and returns result.
      cents -= result[i] * coins[i];
  }
  return result;
}

// Tests

console.log(coinCombo(1)); // [1, 0, 0, 0]
console.log(coinCombo(2)); // [2, 0, 0, 0]
console.log(coinCombo(5)); // [0, 1, 0, 0]
console.log(coinCombo(6)); // [1, 1, 0, 0]
console.log(coinCombo(10)); // [0, 0, 1, 0]
console.log(coinCombo(11)); // [1, 0, 1, 0]
console.log(coinCombo(15)); // [0, 1, 1, 0]
console.log(coinCombo(17)); // [2, 1, 1, 0]
console.log(coinCombo(25)); // [0, 0, 0, 1]
console.log(coinCombo(30)); // [0, 1, 0, 1]
console.log(coinCombo(36)); // [1, 0, 1, 1]
console.log(coinCombo(43)); // [3, 1, 1, 1]