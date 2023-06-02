const pet = {
    animal: "dog",
    name: "Joey",
    breed: "australian shepherd",
    age: 11,
};

// Template literals
// Before
const {animal, name, breed, age} = pet;
console.log("Hi, I'am a "+ animal 
    + " named "+ name 
    +". I am an "+ breed 
    +" and "+ age +" years old.");

// Final and the possibility to display on multiple lines
console.log(
    `Hi, I'am a ${animal} named ${name}. 
    I am an ${breed} and ${age} years old.`
    );

// other sample
const [x, y] = [5, 10];
const sum = `The sum of ${x} and ${y} is ${x+y}!`;
console.log(sum);


// we can also call functions 
function sayHello(name){
    return `Hello ${name}`;
};

console.log(`${sayHello("James")}, Hope this finds you well! `);
