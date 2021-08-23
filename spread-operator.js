// file Name:spread-operator.js

const numbers = [10, 15, 20, 45, 80, 41, 78, 87, 12, 66];
const max = Math.max(...numbers);
console.log(max);

const newArray = ['jony', ...numbers, 'rony'];
console.log(newArray);
