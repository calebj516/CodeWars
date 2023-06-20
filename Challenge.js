// Challenge: Friend or Foe? (7 kyu)

// Description:

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// My code below:

const friend = (friends) => friends.filter(name => name.length == 4 && isNaN(name));

// Notes on logic:

// The filter method removes all names that are not 4 characters in length. The isNaN function ensures that only names are included -- something like "1234" would otherwise be included

// Tests

console.log(friend(["Ryan", "Kieran", "Mark"])); // ["Ryan", "Mark"]
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])); // ["Ryan"]
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])); // ["Jimm", "Cari", "aret"]
console.log(friend(["Love", "Your", "Face", "1"])); // ["Love", "Your", "Face"]
console.log(friend(["Hell", "Is", "a", "badd", "word"])); // ["Hell", "badd", "word"]
console.log(friend(["Issa", "Issac", "Issacs", "ISISS"])); // ["Issa"]
console.log(friend(["Robot", "Your", "MOMOMOMO"])); // ["Your"]
console.log(friend(["Hello", "I", "AM", "Sanjay", "Gupt"])); // ["Gupt"]
console.log(friend(["This", "IS", "enough", "TEst", "CaSe"])); // ["This", "TEst", "CaSe"]
console.log(friend(["1234"])); // []