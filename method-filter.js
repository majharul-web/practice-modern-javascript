// file name: method-filter.js  -->
// example 1:
const numbers = [4, 8, 5, 15, 87, 25, 3, 78, 50, 16, 33, 41, 2];

const smallNumber = numbers.filter((number) => number < 20);

const bigNumber = numbers.filter((number) => number > 20);

console.log(bigNumber);

// example 02:
const products = [
  { name: 'walton laptop', price: 40000, color: 'black' },
  { name: 'walton phone', price: 25000, color: 'blue' },
  { name: 'hp laptop', price: 48000, color: 'black' },
  { name: 'dell laptop', price: 47000, color: 'silver' },
];
const blackProduct = products.filter((product) => product.color == 'black');
console.log(blackProduct);
