// Challenge: Delete occurrences of an element if it occurs more than n times (JavaScript) (6 kyu)

// Instructions:

// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

// My code below:

function deleteNth(arr, n) {
  new_arr = [];
  arr.forEach((element) => {
    // If the length of the array returned by filter is less than n, push the element to new arr
    // i === element will be false, resulting in its length being less than n, until i is present in new_arr n times
    if (new_arr.filter((i) => i === element).length < n) {
      new_arr.push(element);
    }
  });
  return new_arr;
}

// Tests below:

console.log(deleteNth([1, 1, 1, 1], 2)); // return [1,1]
console.log(deleteNth([20, 37, 20, 21], 1)); // return [20,37,21]
