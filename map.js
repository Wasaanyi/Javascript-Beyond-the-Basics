const numbers = [1,2,3,4,5];

const books = [
    {title:"The Catcher in the Rye", author:"J.D. Salinger"},
    {title:"The Art of Gathering", author:"Priya Parker"},
    {title:"1984", author:"George Orwell"},
    {title:"The Great Gatsby", author:"F. Scott Fitzgerald"},
    {title:"Atomin habits", author:"James Clear"}
];

const names = ["abra", "wasaanyi", "james", "hanna", "jacob", "kayla"];

// create a new list with numbers multiplied by 2
const multipliedNumbers = numbers.map(function (number){
    return number * 2;
});
// console.log(multipliedNumbers);
// console.log(numbers);


// transforming arrays
const bookTitles = books.map(function (book, index){
    return `${index+1} - ${book.title}`;
});
// console.log(bookTitles);


// used to modify and transform strings of an array
// capitalize the first letter of each name
const capitalizedNames = names.map(function (name){
    return name.charAt(0).toUpperCase() + name.slice(1);
});
// console.log(capitalizedNames);
