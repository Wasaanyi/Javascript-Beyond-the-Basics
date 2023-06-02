const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const people = [
    {name: "Alice", age: 30},
    {name: "Hope", age: 19},
    {name: "Ben", age: 25},
    {name: "Charlie", age: 50},
    {name: "Dana", age: 28},
    {name: "Joey", age: 43}
];

// chaining methods
// names of people 30 years and above
const filteredPeopleNames = people
    .filter(person => person.age>= 30)
    .map(person => person.name);
console.log(filteredPeopleNames);


// double each element of the array using map()
// filter() numbers >= 5 in the resulting array of the map
// sum up all elements in the resulting array of the filter using reduce() 
const results = numbers
    .map(number => number*2)
    .filter(number => number >= 5)
    .reduce((acc, curr) => acc + curr, 0);
console.log(results);
