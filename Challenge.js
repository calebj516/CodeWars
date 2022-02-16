// Challenge: Defining getters and setters on an existing class (6 kyu)

// Description:

// There is a preloaded class of Person and it needs a new getter and setter. Person is defined with a constructor that takes a first name and a last name, and provides a mean to get the first name, last name, and full name.

// Add a getter of name that returns the full name
// Add a setter of name that modifies first name and last name

// My code below:

// Note - I have added a property of my own, middleInitial, to this challenge.

class Person {
  constructor(firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleInitial = middleName[0].toUpperCase(); // this will work whether a full middle name is passed in, or just the middle initial
    this.lastName = lastName;
  }
  
  getName() {
    return `${this.firstName} ${this.middleInitial} ${this.lastName}`;
  }
}

// define a new property called "name"
// using the prototype ensures that all objects instantiated using the Person class follow the pattern below
Object.defineProperty(Person.prototype, "name", {

  get() { 
    return this.getName();
  },

  set(name) {
    // the line below uses destructuring to set the properties
    return [firstName, middleInitial, lastName] = name.split(" ");
  }

})

// Tests

let calebJones = new Person('Caleb', 'D', 'Jones');

console.log(calebJones.firstName); // 'Caleb'
console.log(calebJones.middleInitial); // 'D'
console.log(calebJones.lastName);  // 'Jones'
console.log(calebJones.getName()); // 'Caleb D Jones'
console.log(calebJones.name); // 'Caleb D Jones'

let joeSchmoe = new Person('Joseph', 'Moe', 'Schmoe');

console.log(joeSchmoe.firstName); // 'Joseph'
console.log(joeSchmoe.middleInitial); // 'M'
console.log(joeSchmoe.lastName);  // 'Schmoe'
console.log(joeSchmoe.getName()); // 'Joseph M Schmoe'
console.log(joeSchmoe.name); // 'Joseph M Schmoe'
