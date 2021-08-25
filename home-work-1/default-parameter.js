// file name: default-parameter.js
function myFunc(a, b, c = 7) {
  const sum = a + b + c;
  return sum;
}
const result = myFunc(5, 10);
console.log(result);
