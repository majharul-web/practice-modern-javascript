// fileName:class-inheritance.js

// parent class
class Person {
  constructor(name, age, post) {
    this.name = name;
    this.age = age;
    this.post = post;
  }
  dateOfBirth() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

class Teacher extends Person {
  constructor(name, age, post, subject) {
    super(name, age, post);
    this.subject = subject;
  }
}

const rahim = new Person('A.Rahim', 45, 'A.T');
const teacher = new Teacher('A.Rahim', 45, 'A.T', 'ict');
console.log(rahim);
console.log(teacher.dateOfBirth());
