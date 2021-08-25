// file name: destructuring.js

// simple object
const myOb = {
  name: 'jony',
  department: 'computer',
  result: 3.92,
};

const { name, result } = myOb;
console.log(`my name is ${name} and result CGPA-${result}`);

// array
const numbers = [10, 15, 20, 25, 30, 45];
const [, , three] = numbers;
console.log(three);
