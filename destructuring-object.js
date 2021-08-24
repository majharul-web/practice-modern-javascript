// -----------------file name:destructuring-object.js -----------------  -->

// example 01:simple-->
const friend = { name: 'jony', age: 22, quality: 'childhood', address: 'mogorpara' };

/* const { name, age, quality } = friend;
console.log(`My friend name is ${name}
He is ${age} years old and, He is my ${quality} friend`); */

// example 02:medium-->
const friends = {
  friend1: {
    name: 'jony',
    address: { village: 'mogorpara', thana: 'nawabganj', district: 'dinajpur' },
    property: { age: 22, quality: 'childhood' },
  },
  friend2: {
    name: 'sagor',
    address: { village: 'mirjapur', thana: 'nawabganj', district: 'dinajpur' },
    property: { age: 22, quality: 'school' },
  },
};

/* const { village, thana, district } = friends.friend1.address;
console.log(`her village is ${village}
Her thana is ${thana} , Her district is ${district}`); */

// access different  way-->
const {
  friend1: { name },
  friend1: {
    address: { district },
  },
} = friends;
console.log(name, district);

// strore new variable-->
const { village: newVillage, thana: newThana, district: newDistrict } = friends.friend1.address;
console.log(`her village is ${newVillage}
Her thana is ${newThana} , Her district is ${newDistrict}`);
