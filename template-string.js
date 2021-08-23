// file name:template-string.js ----- -->

// old style example 01:-->
let firstName = 'majharul';
let lastName = 'islam';
const fullName = firstName + ' ' + lastName;
console.log('My full Name is: ' + fullName);

// use template string example 01:-->
let newFirstName = 'majharul';
let newLastName = 'jony';

const newFullName = `My full name is:
${newFirstName} ${newLastName}
`;
console.log(newFullName);
