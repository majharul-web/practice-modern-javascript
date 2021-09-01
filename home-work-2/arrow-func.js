// file name: arrow-func.js

//  example 01 ==>
const noParam = () => 89;
console.log(noParam());

// example 02 ==>
const singleParam = (x) => x / 7;
console.log(singleParam(70));

// example 03 ==>
const towParam = (x, y) => (x + y) / 2;
console.log(towParam(20, 30));

// example 04 ==>
const multiLine = (x, y) => {
  let a = x + 7;
  let b = y + 7;
  return a + b;
};
console.log(multiLine(20, 30));
