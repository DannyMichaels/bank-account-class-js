class BankAccount {
  constructor(type, money = 0) {
    this.type = type;
    this.money = money;
    this.transactionHistory = [];
  }

  withdraw(amount) {
    this.transactionHistory.push({
      date: new Date(),
      previousAmount: this.money,
      newAmount: (this.money -= amount),
    });
    this.money -= amount;
  }

  deposit(amount) {
    this.transactionHistory.push({
      date: new Date(),
      previousAmount: this.money,
      newAmount: (this.money += amount),
    });
    this.money += amount;
  }

  showBalance() {
    console.log('BALANCE:', this.money);
  }

  getTransactionHistory() {
    console.log('TRANSACTION HISTORY:', this.transactionHistory);
  }
}

let bankAccount = new BankAccount('checking', 0);

bankAccount.deposit(100);
bankAccount.showBalance();
bankAccount.withdraw(50);
bankAccount.showBalance();
bankAccount.getTransactionHistory();
