// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const greetings = { message: "Hello, earthling! I bring peace." };

// Log the message 

console.log(greetings.message);

// --------------------------------------
// Exercise 2 - Defining an object.

// Create an object that has your name and age. 

const person = {
    name: "Jakob",
    lastName: "Kjærulff",
    age: 25
};

console.log(person);
// --------------------------------------
// Exercise 3 - Add a key-value pair

const stackOverflow = {};

Object.assign(stackOverflow, { problem: "StackOverflow answer here" });


// make a rule called isAllowed and let the value be true

Object.assign(stackOverflow, { isAllowed: true });
console.log(stackOverflow);

// --------------------------------------
// Exercise 4 - Remove a property

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute."

Object.assign(thisSong, { about: "Just a tribute." });
delete thisSong.description;

console.log(thisSong);

// --------------------------------------


