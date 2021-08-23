// old style-->
function oldAdd(num1, num2) {
  // solve error NaN old style-->
  num2 = num2 || 0;
  /* if (num2 == undefined) {
    num2 = 0;
  } */

  const sum = num1 + num2;
  return sum;
}
// show result-->
// const result = oldAdd(10, 15);

// but error Nan-->
const result = oldAdd(10);
console.log(result);

// solve this problem in es6 --default parameter---- -->
function addNew(n1, n2 = 15) {
  const addResult = n1 + n2;
  return addResult;
}
// show result correctly all-->
// console.log(addNew(20, 30));
console.log(addNew(20));
