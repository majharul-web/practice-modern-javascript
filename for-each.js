// file name:  for-each.js  -->
// ******for each not return new array like as map,filter

// example 01-simple:
const numbers1 = [5, 10, 15, 20, 25, 30];
numbers1.forEach((x) => console.log(x));

// example 02-medium:
const numbers2 = [5, 10, 15, 20, 25, 30];
const newNumber = [];
numbers2.forEach((x) => newNumber.push(x * x));
console.log(newNumber);

// example 03-complex:
const numbers3 = [5, 10, 15, 20, 25, 30];
numbers3.forEach((x, index, arr) => (arr[index] = x + 5));
console.log(numbers3);
