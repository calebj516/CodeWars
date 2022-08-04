// Challenge: Product Array (Array Series #5) (7 kyu)

// Description:

// Task: Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes:

// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

function productArray(numbers){

    const productArr = [];
    
    for(let i = 0; i < numbers.length; i++){
      productArr.push(numbers.filter((num, idx) => idx !== i).reduce((total, current) => total * current, 1));
    }
    
    return productArr;
  }

// Tests

console.log(productArray([12,20])); // [20,12]
console.log(productArray([12,20])); // [20,12]
console.log(productArray([3,27,4,2])); // [216,24,162,324]
console.log(productArray([13,10,5,2,9])); // [900,1170,2340,5850,1300]
console.log(productArray([16,17,4,3,5,2])); // [2040,1920,8160,10880,6528,16320]