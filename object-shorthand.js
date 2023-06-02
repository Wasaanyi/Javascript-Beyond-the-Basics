// Short hand syntax
const firstName = "James";
const lastName = "Wasaanyi"
// const hobby = "coding"

const timeTraveler = {
    firstName,
    lastName,
    hobby: "coding"
}

console.log(timeTraveler);

const person = {
    name: "Lorraine",
    age: 30,
    sayHello: function () {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
    },   
}

person.sayHello();

const name = "Mario";
const lives = 3;

const character = {
    name,
    lives,
    jump () {
        console.log(`Boing! ${this.name} has ${this.lives} lives`);
    },
};
character.jump();

