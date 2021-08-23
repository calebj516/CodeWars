// Challenge: Exclamation marks series #17: Put the exclamation marks and question marks to the balance, Are they balanced? (6 kyu)

// Instructions:

// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

// My code below:

function balance(left, right) {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < left.length; i++) {
    left[i] === "?" ? (leftSum += 3) : (leftSum += 2);
  }

  for (let i = 0; i < right.length; i++) {
    right[i] === "?" ? (rightSum += 3) : (rightSum += 2);
  }

  return leftSum === rightSum
    ? "Balance"
    : leftSum > rightSum
    ? "Left"
    : "Right";
}

// Tests below:

console.log(balance("!!", "??")); // Right
console.log(balance("!??", "?!!")); // Left
console.log(balance("!?!!", "?!?")); // Left
console.log(balance("!!???!????", "??!!?!!!!!!!")); // Balancce
