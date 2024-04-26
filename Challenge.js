// Challenge: Well of Ideas - Easy Version (8 kyu)

// Description:

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.

// Challenge code below:

function well(ideas){
    let count = 0;

    for(let idea of ideas) {
        if(idea == 'good') count++;
    }

    return count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!';    
}
// Tests

console.log(well(['bad', 'bad', 'bad'])); // 'Fail!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])); // 'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])); // 'I smell a series!'