// Rest parameters ...parameterName

function myFruit (...fruits) {
    const [fruit1, fruit2, ...otherFruits] = fruits;
    console.log(otherFruits);
    console.log(`My favourite fruits are ${fruit1} and ${fruit2}`);   
}

myFruit("apples", "grapes", "oranges", "peaches", "kiwis");


// accepts numbers and return their sum
function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1,2,3,4))

// find max
function findMax(...numbers){
    return Math.max(...numbers);
}
console.log(findMax(1,1000, 10, 5330))