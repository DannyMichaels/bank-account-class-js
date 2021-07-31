class Transaction {
  constructor(previousAmount, newAmount, type, date) {
    this.previousAmount = previousAmount;
    this.type = type;
    this.newAmount = newAmount;
    this.date = date;
  }
}

class TransactionHistory {
  constructor() {
    this.transactions = [];
  }

  create({ previousAmount, newAmount, type, date }) {
    this.transactions.push(
      new Transaction(`$${previousAmount}`, `$${newAmount}`, type, date)
    );
  }

  print() {
    let dateStringTransactions = this.transactions.map((t) => {
      return {
        ...t,
        date: t.date.toString(),
      };
    });
    return console.log('TRANSACTION HISTORY:', dateStringTransactions);
  }
}

class BankAccount {
  constructor(type, money = 0) {
    this.type = type;
    this.money = money;
    this.transactionHistory = new TransactionHistory();
  }

  withdraw(amount) {
    this.transactionHistory.create({
      date: new Date(),
      previousAmount: this.money,
      type: 'withdraw',
      newAmount: (this.money -= amount),
    });
    this.money -= amount;
  }

  deposit(amount) {
    this.transactionHistory.create({
      date: new Date(),
      previousAmount: this.money,
      type: 'deposit',
      newAmount: (this.money += amount),
    });
    this.money += amount;
  }

  showBalance() {
    console.log('BALANCE:', `$${this.money}`);
  }

  getTransactionHistory() {
    this.transactionHistory.print();
  }
}

let bankAccount = new BankAccount('checking', 0);

bankAccount.deposit(100);
bankAccount.showBalance();
bankAccount.withdraw(50);
bankAccount.showBalance();
bankAccount.getTransactionHistory();
