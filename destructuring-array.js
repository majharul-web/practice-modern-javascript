// -----------------file name:destructuring-array.js -----------------  -->
// example 01:simple
const number = [10, 15];
const [a, b] = number;
console.log(a, b);

// example 02:medium-->   ,is= skip
const number2 = [10, 15, [12, 14, 16], 20, 45, 46, 12, 78, 92];

const [, , [, c, d]] = number2;
// const [, c, , , d] = number2;
console.log(c, d);
