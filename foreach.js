const numbers = [1,2,3,4,5];
const squaredNumbers = [];

// calculating sum for the array using
let sum = 0;

numbers.forEach(function (number){
    sum += number;
});

// console.log(sum);


// calculating the squareRoot of each number
numbers.forEach(function(number){
    squaredNumbers.push(number*number);
});

// console.log(squaredNumbers);