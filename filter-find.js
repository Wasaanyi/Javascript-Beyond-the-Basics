const numbers = [1, 5, 7, 2, 8, 3];
const evenNumbers = [2, 4, 6, 8, 10];

const people = [
    {name: "Jim", age: 21},
    {name: "John", age: 25},
    {name: "Sara", age: 20},
    {name: "Peter", age: 30},
    {name: "Joy", age: 18},
    {name: "Dan", age: 44}
];

const books = [
    {title:"The Catcher in the Rye", author:"J.D. Salinger"},
    {title:"The Art of Gathering", author:"Priya Parker"},
    {title:"1984", author:"George Orwell"},
    {title:"The Great Gatsby", author:"F. Scott Fitzgerald"},
    {title:"Atomin habits", author:"James Clear"}
];

// filter()
// find numbers that are greater than or equal to five
const filteredNumbers = numbers.filter(function (number) {
    return number >= 5;
});
// console.log(filteredNumbers);
// console.log(numbers);

// filter all people who are older than 21 years
const filteredPeople = people.filter( function (person) {
    return person.age >= 21;
});
// console.log(filteredPeople);



// find()
// returns the first element that matches the condition set
const numberFound = evenNumbers.find(function(enumber){
    return enumber > 5;
});
// console.log(numberFound);

const targetAuthor = "Priya Parker";
const targetBook = books.find(function(book){
    return book.author === targetAuthor;
});
// console.log(targetBook);