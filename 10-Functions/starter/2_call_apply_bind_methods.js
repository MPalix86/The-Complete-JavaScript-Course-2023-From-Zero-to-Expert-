'use strict';

// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

/**
 * dato che gli oggetti eurowings e lufthansa sono uguali, perche definire nuovamente la funzione book quando è gia
 * stata definita in lufthansa ? essendo le funzioni in js oggetti posso fare come segue per riciclarla !
 */
const book = lufthansa.book;

/**
 * ovviamente questo non puo funzionare perche ora in questo modo la funzione (che prima era un metodo), salvata in una
 * variabile è diventata una semplice funzione appunto, e le funzioni semplici hanno "this" undefined se chiamte in un contesto globale!
 * quindi se proviamo ad eseguirla otteniamo l'errore: cannot read properties of undefined
 */
// book(23, 'Sarah Williams');

/**
 * quindi come facciamo a dire a javascript che vogliamo usare la funzione book ma con il contesto (this) di eurowings ?
 * dobbiamo, in maniera esplicita dire a js a cosa vogliamo che punti this e quando, per fare questo ci sono 3
 * funzioni call, apply e bind
 * bisogna tenere presente che funzioni sono solo oggetti e quindi hanno dei metodi. call, apply e bind sono metodi di funzioni
 */

/**
 * usiamo call(arg1, ...others)
 * arg1 è prorio riferito a cosa vogliamo che this punti, gli altri argomenti sono argomenti della nostra funzione !
 */
book.call(eurowings, 239, 'mirco');
book.call(lufthansa, 239, 'mirco palese');
console.log(eurowings);
console.log(lufthansa);

/**
 * un metodo simile al metodo call è il metodo apply, che fa esattamente la stessa cosa con la differenza che oltre al parametro di cosa
 * dovra essere this, prende un'altro parametro che è un array e che conterrà i parametri da passare alla nostra funzione.
 * in realtà questo metodo non è piu usato in favore di call.
 */

const params = [239, 'rebecca'];
book.apply(eurowings, params);

/**
 * un altro metodo è il bind che ci permette di esplicitare il valore di this in una qualsiasi funzione . la differenza è che
 * bind non ritorna direttamente la funzione che devo eseguire ma ritorna una nuova funzione
 */
const bookEW = book.bind(eurowings);
const bookLU = book.bind(lufthansa);
bookEW(239, 'mirco palese bind');

/**
 * poiche bind acctta i paramtri come call e restituisce una nuova funzione possiamo fare molto di piu;
 * possiamo addirittura creare  un metodo per ogni singolo volo
 */

const bookEW23 = book.bind(eurowings, 239);
const bookLU56 = book.bind(lufthansa, 56);

/**
 * questo pattern è abbastanza comune ed è chiato partial application
 */
bookEW23('giovanni biasi');
bookLU56('luca rossi');

/**
 * ad esempio quando usiamo oggetti con event listeners questo pattern è molto comune,vediamo perche:
 */

lufthansa.planes = 300;
lufthansa.addPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

/**
 * se clicchiamo, la funzione ritorna NaN  perche ?
 * abbiamo gia visto che quando si chiama un event handler, this è sempre uguale all'oggetto sul quale si istanzia l'handler
 * quindi in pratica se si prova a fare this.plane++ nell'event handler, con this che contiene l'oggetto html che ovviamente non è un numero
 * si avra NaN !
 */
// document.querySelector('.buy').addEventListener('click', lufthansa.addPlane);

/**
 * per risolvere questo si usa il bind
 */
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.addPlane.bind(lufthansa));
