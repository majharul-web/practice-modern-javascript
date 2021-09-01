// file name: object-details.js

const products = {
  customerName: 'Mr Rahim',
  balance: 130000,
  phones: {
    brand1: 'samsung a22',
    brand2: 'walton m11',
    brand3: 'xiaomi c20',
    brand4: 'realme f30',
  },
  laptop: ['walton laptop', 'hp laptop', 'dell laptop', 'asus laptop'],
  getTotalBalance: function (totalCost, extraCost) {
    this.balance = this.balance - (totalCost + extraCost);
    return this.balance;
  },
};

const newBalance = products.getTotalBalance(80000, 2000);
console.log(newBalance);

// template string:
const output = `
customer name:${products.customerName},
he buy:${products.phones.brand2} phone and ${products.laptop[2]},
her newBalance:${newBalance}
`;
console.log(output);
