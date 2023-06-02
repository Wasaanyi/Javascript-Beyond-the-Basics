const person = {
    name: "Lorraine",
    age: 30,
    sayHello: function () {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
    },   
}

export {
    person
}