// file name: hw-2-arrow-func.js

// a:
const div = (x) => x / 5;
console.log(div(100));

// b:
const addMulti = (x, y) => (x + 2) * (y + 2);
console.log(addMulti(10, 15));

// c:
const multiPlication = (x, y, z) => x * y * z;
console.log(multiPlication(5, 7, 9));

// d:
const addMultiBig = (x, y) => {
  const add1 = x + 2;
  const add2 = y + 2;
  return add1 * add2;
};
console.log(addMultiBig(10, 15));
