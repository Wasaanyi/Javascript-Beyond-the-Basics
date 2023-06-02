function sum (...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
};

const findMax = (...numbers) => {
    return Math.max(...numbers);
};

export {
    sum,
    findMax
}