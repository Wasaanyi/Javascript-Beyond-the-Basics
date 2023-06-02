const numbers = [7, 4, 2, 6, 1, 3, 5];
const fruits = ["pear", "banana", "apple", "orange", "kiwi"];

const people = [
    {name: "Abe", age: 70},
    {name: "Hope", age: 30},
    {name: "Joey", age: 25},
    {name: "Peter", age: 40},
    {name: "Hanna", age: 23}
];

// array.sort(compareFn)
numbers.sort();
console.log(numbers);

// returns a to z
fruits.sort();
console.log(fruits);

// returns z - a
fruits.sort().reverse();
console.log(fruits);

// ascending
people.sort((a,b) => a.age - b.age ); 
console.log(people);

// descending
people.sort((a,b) => b.age - a.age ); 
console.log(people);

// a to z
people.sort((a,b) => (a.name).localeCompare(b.name));
console.log(people);

// z to a
people.sort((a,b) => (b.name).localeCompare(a.name));
console.log(people);