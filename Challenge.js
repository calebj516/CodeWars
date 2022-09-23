// Challenge: The maximum sum value of ranges -- Simple version (6 kyu)

// Description:

// Given an array arr that contains some integers(positive, negative or 0), and a range list such as [[start1,end1],[start2,end2],...], start and end are the index of arr and start always less than end. Your task is to calculate the sum value of each range (start index and end index are both inclusive), and return the maximum sum value.

// For example:

//  Given arr = [1,-2,3,4,-5,-4,3,2,1], 
//        range = [[1,3],[0,4],[6,8]]
//  should return 6
 
//  calculation process:

//  range[1,3] = arr[1]+arr[2]+arr[3] = 5
//  range[0,4] = arr[0]+arr[1]+arr[2]+arr[3]+arr[4] = 1
//  range[6,8] = arr[6]+arr[7]+arr[8] = 6

//  So the maximum sum value is 6

// Note:

// arr/$a always has at least 5 elements;
// range/$range/ranges always has at least 1 element;
// All inputs are valid;
// This is a simple version, if you want some challenge, please try the challenge version.

// Some Examples:

//  maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]) === 6
//  maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3]]) === 5
//  maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,4],[2,5]]) === 0

// My code below:

function maxSum(arr,range){

    let sumArr = [];

    for(let i = 0; i < range.length; i++){
        // Note: added 1 to the second argument of slice because slice extracts up to, but not including, the end.
        sumArr.push(arr.slice(range[i][0], range[i][1] + 1).reduce((prev, current) => prev + current));
    }

    return Math.max(...sumArr);
}

// Tests

console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]])); // === 6
console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3]])); // === 5
console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,4],[2,5]])); // === 0
