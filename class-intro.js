// file name:  class-intro.js    -->

class Students {
  department = 'computer';
  constructor(name, rollNo) {
    this.name = name;
    this.roll = rollNo;
  }
  tech() {
    console.log('I am a Web Developer');
  }
}

const jony = new Students('M.I.Jony', 302112);
jony.tech();
console.log(jony);
