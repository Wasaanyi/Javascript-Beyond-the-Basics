const pet = {
    animal: "dog",
    name: "Joey",
    breed: "australian shepherd",
    age: 11,
};


function getCarInfo () {
    return {
        make: "Tesla",
        model: "Model 3",
        year: "2023",
        color: "Deep Blue Metallic",
    };
};



// Object destructing
// makes code precice maintainable and easier to understand

const {animal, name, breed, age} = pet;
console.log("Hi, I'am a "+ animal 
    + " named "+ name 
    +". I am an "+ breed 
    +" and "+ age +" years old.");

// takes object for paramater
function greetPet({name, breed, age}){
    console.log("Hi " + name + ", the " + breed + ". You are "+ age + " years old");
}

greetPet(pet);

// destructuring from function
const {make, model, year, color} = getCarInfo();
console.log(make, model, year, color);



