// file name : destructuring.js

// object
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

const {
  customerName: name,
  balance,
  phones: { brand1 },
} = products;
console.log(name, balance, brand1);

// array
const arr = [10, 15, 22, 17, 16];
const [x, , , y, z] = arr;
console.log(x, y, z);
