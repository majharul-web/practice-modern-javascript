// -------------------file name:arrow-function-more.js----------------------- -->
// example 01:single parameter-->
const singleParameter = (num1) => num1 * num1;
console.log(singleParameter(5));

// example 02: parameterLess-->
const parameterLess = () => 10 * 10;
console.log(parameterLess());

// example 02: multiple parameter and multiple work-->
const multiple = (x, y) => {
  const multiplication = x * y;
  const add = x + y;
  const sub = x - y;
  const div = x / y;
  const total = multiplication + add + sub + div;
  return total;
};
console.log(multiple(100, 10));
