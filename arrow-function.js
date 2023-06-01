const numbers = [2, 4, 6, 8, 10, 12];

const books = [
    {title:"The Catcher in the Rye", author:"J.D. Salinger"},
    {title:"The Art of Gathering", author:"Priya Parker"},
    {title:"1984", author:"George Orwell"},
    {title:"The Great Gatsby", author:"F. Scott Fitzgerald"},
    {title:"Atomin habits", author:"James Clear"}
];

// map
const multipliedNumbers = numbers.map(number => number * 2);
console.log(multipliedNumbers);

// forEach()
const squaredNumbers = [];
numbers.forEach(number => squaredNumbers.push(number*number));
console.log(squaredNumbers);

// filter() 
const filteredNumbers = numbers.filter(number => number >= 5);
console.log(filteredNumbers);

// find()
const targetBook = books.find(book => book.author === "Priya Parker");
console.log(targetBook);
