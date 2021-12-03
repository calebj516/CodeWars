// Challenge: Directions Reduction (5 kyu)

// Description:
// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task:
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// Notes:
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

// My code below:

// Directions and their opposites are stored in the object below:
let opposites = {
  "NORTH" : "SOUTH",
  "SOUTH" : "NORTH",
  "WEST" : "EAST",
  "EAST" : "WEST"
};

function dirReduc(arr){
// Declaring a variable to keep track of whether or not the arr has been changed.
let modified = false;
// Loop through the contents of arr up to the second-to-last element, because we are comparing two elements at a time.
for(let i = 0; i < arr.length - 1; i++){
  // If the element one index ahead of the current element is the opposite direction of the current element, remove both elements from arr and set modified to true.
  // Passing in the direction of the current element into opposites will obtain the opposite direction, which we can compare to the next element.
  if(arr[i + 1] === opposites[arr[i]]){
    // arr splice with 2 as the second argument will remove 2 elements from the start of arr.
    arr.splice(i, 2);
    modified = true;
  }
}
// Recursively call dirReduc until arr is no longer modifiable (once modified is false, just the arr will be returned)
return modified ? dirReduc(arr) : arr;
}

// Tests below:
Console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]
Console.log(dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"])); // []
Console.log(dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","NORTH"])); // ["NORTH"]