// file   name: method-reduce.js  -->
const numbers = [4, 8, 5, 15, 87, 25, 3, 78, 50, 16, 33, 41, 2];

// reduce is contain previousValue=now set default 10 and currentValue=now number
const numbersTotal = numbers.reduce((sum, number) => {
  return (sum += number);
}, 10);
console.log(numbersTotal);
