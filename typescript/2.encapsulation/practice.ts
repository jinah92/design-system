// class: BankAccount
// methods: depositing, writhdrawing
// property: balance

class BankAccount {
  private _balance: number;

  constructor(initialBalance: number = 0) {
    this._balance = initialBalance;
  }

  // Getter to get balance of the bank account
  public get balance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit amount");
      return;
    }
    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit amount");
      return;
    }
    if (this._balance < amount) {
      console.log("Insufficient Funds");
      return;
    }
    this._balance -= amount;
  }
}

export default function main() {
  const myAccount = new BankAccount(1000);
  myAccount.deposit(500);
  myAccount.withdraw(200);

  console.log(myAccount.balance);
}
