// Challenge: Running out of space (7 kyu)

// Description:

// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

// Challenge code below:

function spacey(array) {
    let str = '';
    return array.map(el => str += el);
}

// Tests

console.log(spacey(['kevin', 'has','no','space'])); // ['kevin','kevinhas','kevinhasno','kevinhasnospace']
console.log(spacey(['this', 'cheese', 'has', 'no', 'holes'])); // ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']