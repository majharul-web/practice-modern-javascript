// file name:  array-method.js

// map():
const numbers = [10, 47, 75, 78, 15, 45, 78, 13, 43, 49, 18, 17];
const multipleNumber = numbers.map((x) => x * 5);
console.log(multipleNumber);

//filter()
const oddNumbers = numbers.filter((x) => x % 2 != 0);
console.log(oddNumbers);

// find()
const products = [
  { name: 'phone', price: 7000 },
  { name: 'tab', price: 5000 },
  { name: 'watch', price: 3000 },
  { name: 'laptop', price: 72000 },
];

const myQuery = products.find((product) => product.price == 5000);
console.log(myQuery);
