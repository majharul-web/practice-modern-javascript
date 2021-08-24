// file name:method-map.js-->
const oldNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// use map- es5
const newNumber5 = oldNumber.map(function (element) {
  return element * 2;
});
console.log(newNumber5);

// use map- es6
const newNumber6 = oldNumber.map((element) => element * element);
console.log(newNumber6);

// complex example-->

const products = [
  { name: 'walton laptop', price: 40000, color: 'black' },
  { name: 'walton phone', price: 25000, color: 'blue' },
  { name: 'hp laptop', price: 48000, color: 'black' },
  { name: 'dell laptop', price: 47000, color: 'silver' },
];
const productLength = products.map((product) => product.name.length);

const productColor = products.map((product) => product.color);

console.log(productColor);
