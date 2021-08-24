// file name: method-find.js -->
// example 1:
const numbers = [4, 8, 5, 15, 87, 25, 3, 78, 50, 16, 33, 41, 2];
const firstBigValue = numbers.find((number) => number > 10);
console.log(firstBigValue);

// findIndex
const firstBigValueIndex = numbers.findIndex((number) => number > 10);
console.log(firstBigValueIndex);
