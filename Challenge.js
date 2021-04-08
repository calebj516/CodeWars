// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

const mango = (quantity, price) => {
  const discount = Math.floor(quantity / 3);
  return (quantity - discount) * price;
};

// First we calculate the number of mangos that are free by dividing the quantity by 3.
// Math.floor returns the largest integer less than or equal the result of quantity / 3. This comes in handy for results that have a remainder.
// Ex: 14 / 3 = 4.6667, math.floor changes this to 4.
// Finally, we subtract the free mango(s) from the quantity and multiply by the price.
