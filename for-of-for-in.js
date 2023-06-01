const fruits = ["apples", "banana", "orange", "peach"];
const numbers = [1, 2, 3, 4, 5 ];
const greeting = "Hello, World!";

const car = {
    make: "Tesla",
    model: "Model 3",
    year: 2023
};

// // for--of loop 
// // multiply number by 2
// for (const number of numbers) {
//     console.log(number*2);
// };

// // log each element of the fruit in uppercase
// for (const fruit of fruits) {
//     console.log(fruit.toUpperCase());
// };

// // log characters of a string
// for (const character of greeting) {
//     console.log(character);
// };

// // log index of an array
// for (const numberIndex of numbers.keys()) {
//     console.log(numberIndex);
// };



// for-in loop
// log properties of and object with the corresponding values
for (const property in car) {
    console.log(`${property}: ${car[property]}`);
};

