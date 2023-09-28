'use strict';

class Persona {
  constructor(nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;
  }

  saluta() {
    console.log(`Ciao, sono ${this.nome} ${this.cognome}`);
  }
}

// Creazione di un'istanza della classe Persona
const persona1 = new Persona('Mario', 'Rossi');
persona1.saluta(); // Stampa: Ciao, sono Mario Rossi

/**
 * tutto funziona come spiegato sprima !
 *
 * i metodi dichiarati fuori dal constructor andranno nella proprieta prototype ecc ecc...
 */

/**
 * ogni in js ha delle proprieta speciali che altro non sono che i classici getter e setter
 *
 * basta mettere la parola get o set prima della funzione per dichiarare rispettivamente un
 * getter o un setter
 */

/**
 * esistono nache i metodi statici !
 * prendiamo come esempio il metodo from di Array che data una lista di oggetti ritorna un array
 *
 */
const h1 = document.querySelectorAll('h1');
console.log(Array.from(h1));

/**
 * com'è possibile notare questo metodd non è nel prototipo dell'Array ma viene chiamato
 * usando array direttamente ( quindi non verra ereditato da tutti gli oggettiderivati da un array)
 *
 * la differenza fondamentale è proprio questa un metodo statico non verra ereditatto
 *
 * come si creano i metodi statici ?
 */

const Person = function (name) {
  this.name = name;
};

Person.prototype.saluta = function () {
  console.log('ciao ' + this.name);
};

/**
 * per aggiungere un metodo statico basta aggiungerlo direttamente a Person
 */

Person.metodoStatico = console.log('sono un metodo statico');

/**
 * si possono aggiungere anche alle classi ES6 !basta dichiarare un metodo con la parola static prima
 */
