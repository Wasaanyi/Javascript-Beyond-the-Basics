const numbers = [1, 2, 3];

function getStates () {
    return ["florida", "california", "new york", "oregon"];
};

const car = {
    make: "Tesla",
    model: "Model 3",
    year: "2023",
    range: "315mi",
    color: "Deep Blue Metallic",
    price: 3000
};

// Array destructuring
const [first, second, third=10] = numbers;
console.log(first, second, third);

const [fl, ca, ny, or] = getStates();
console.log("My favourite state is ", fl);


// Object.entries(car)
for (const [key, value] of Object.entries(car)){
    console.log(key + ": "+ value);
}