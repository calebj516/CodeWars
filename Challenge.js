// Challenge: Coding 3min : Remove screws I (7 kyu)

// Description:

// John is a worker, his job is to remove screws from a machine. There are 2 types of screws: slotted (-) and cross (+). John has two screwdrivers, one for each type of screw.

// The input will be a (non-empty) string of screws, e.g. : "---+++"

// When John begins to work, he stands at the first screw, with the correct screwdriver in his hand, and another in his tool kit. He works from left to right, removing every screw. When necessary, he switches between the screwdriver in his hand and the one in his tool kit.

// Each action takes a set amount of time:

// remove one screw : 1 second
// move to the next screw: 1 second
// switch screwdrivers: 5 seconds
// Your task is to return the total time taken to remove all the screws, in seconds.

// Examples
// In order to be more clear, we use ABCDEF to represent the screws. The number in brackets is the time in seconds:

// screws: "---+++"
//          ABCDEF

// remove A (1) + move to B (1) + remove B (1) + 
// move to C (1) + remove C (1) + move to D (1) +
// switch screwdriver (5) + remove D (1) +
// move to E (1) + remove E (1) + move to F (1) + remove F (1)

// total time = 16 seconds
// Another example:

// screws: "-+-+-+"
//          ABCDEF

// remove A (1) +
// move to B (1) + switch screwdriver (5) + remove B (1) +
// move to C (1) + switch screwdriver (5) + remove C (1) +
// move to D (1) + switch screwdriver (5) + remove D (1) +
// move to E (1) + switch screwdriver (5) + remove E (1) +
// move to F (1) + switch screwdriver (5) + remove F (1)

// total time = 36 seconds 

// My code below:

function sc(screws){
  
  let screwChangeTime = 0;
  let screwsArr = screws.split('');
  
  for(let i = 1; i < screwsArr.length; i++){
    // if current element is not equal to previous element a screw change has occured.
    if(screwsArr[i] !== screwsArr[i - 1]){
      screwChangeTime += 5;
    }
  }

  // remove screw time = length of screws. Each screw has to be removed.
  // move to next screw = length of screws - 1, because first screw is not counted.
  return screws.length + (screws.length - 1) + screwChangeTime;
}

// Tests

console.log(sc("---+++")); // 16
console.log(sc("-+-+-+")); // 36
console.log(sc("-+-+-----------")); // 49
console.log(sc("-+-+-++++++++++")); // 54
