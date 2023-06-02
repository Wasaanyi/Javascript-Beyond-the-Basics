const brass = ["trumpet", "trombone"];
const woodwind = ["alto sax", "tenor sax", "bari sax"];
const rhythm = ["piano", "bass", "drums"];

const aus = {
    animal: "dog",
    breed: "Australian shepherd",
};

const joey = {
    name: "joey",
    age: "li",
};

// Spread operator ...array
const originalArray = ["a", "b", "c"];
const newArray = [...originalArray, "d", "e", "f"];
console.log(newArray);

const myBand = [...brass, ...woodwind, ...rhythm];
console.log(myBand);

// spread operator ...object
const myPet = {
    ...aus, 
    ...joey,
    color: "red marie",
    mood: "playful"
};
console.log(myPet);