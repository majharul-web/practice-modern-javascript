// file name: array-method.js

const numbers = [10, 15, 25, 12, 18, 78, 46, 26, 14];

// map()
const divResult = numbers.map((number) => parseInt(number / 7));
console.log(divResult);

// example 03-complex:
const numbers3 = [5, 10, 15, 20, 25, 30];
numbers3.forEach((x, index, arr) => (arr[index] = x + 5));
console.log(numbers3);
