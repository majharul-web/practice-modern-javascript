// file name: optional-chaining.js  -->

const company = {
  name: 'miWebLab',
  ceo: 'M.I.Jony',
  web: {
    work: 'web-development',
    employee: '20',
    tech: {
      first: 'react',
      second: 'wordpress',
      third: 'js',
    },
  },
};

// destructuring
const { third } = company.web.tech;

// optional chaining
console.log(company?.web?.tech?.third);

console.log(company?.backend?.tech?.third);
