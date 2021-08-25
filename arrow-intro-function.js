// -------------------file name:arrow-intro-function.js----------------------- -->
// example 01:general function declaration:-->
function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

// example 02: function expression:-->
const add2 = function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
};

// example 03: function expression anonymous :-->
const add3 = function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
};

// example 04: Arrow function :-->
const add4 = (num1, num2) => (sum = num1 + num2);

//   all function call serially and all function are work-->
const result1 = add(10, 15);
console.log(result1);

const result2 = add2(10, 15);
console.log(result2);

const result3 = add3(40, 15);
console.log(result3);

const result4 = add4(25, 15);
console.log(result4);
