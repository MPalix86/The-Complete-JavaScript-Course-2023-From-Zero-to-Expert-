/**
 * Oggi vediamo come funziona il meccaniscmo dietro la concatenazione dei metodi
 * come quando ad esempio chiamiamo qualcosa.map().filter() ecc ...
 *
 * Possiamo implementare la funzionalita di concatenare i metodi all'interno della classe
 * ed è quello che faremo
 */

class BanckAccount {
  #pin;
  #movements = [];

  location = navigator.location;

  constructor(pin) {
    this.#pin = pin;
  }

  /**
   * in realta la cosa è molto banale basta far ritornare alla funzione l'oggetto
   * che ha bisogna di essere passato alla funzione successiva che in generale è this.
   */

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.#movements.push(-val);
    return this;
  }

  getMovements() {
    return this.#movements;
  }

  setPin(pin) {
    this.#pin = pin;
  }
}

const account = new BanckAccount(123);

movements = account.deposit(14).withdraw(1).getMovements();

console.log(movements);
