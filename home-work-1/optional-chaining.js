//file name: optional-chaining.js

const myDream = {
  company: 'miWebLab',
  ceo: 'M.I.Jony',
  work: {
    field: 'programming',
    tech: {
      first: 'c',
      second: 'php',
      third: {
        language: 'JavaScript',
        library: ['react', 'angular', 'nodejs'],
      },
    },
  },
};
// destructuring
/* const { library } = myDream.work.tech.third;
console.log(library); */

// chaining
console.log(myDream.work.tech.third.library[2]);
// error handle--> ?
console.log(myDream.work.backend?.third.library);
