'use strict';

const bookings = [];

function booking(price, numGuets) {
  const obj = {
    price,
    numGuets,
  };
  bookings.push(obj);
}

/**
 * i parametri che non vengono specificate sarannno nella funzione undefined
 */
booking(5);

/**
 * sfruttando lo short circuiting e i falsy values possiamo risolvere facilemtne
 * tuttavia questo è il metodo pre ES6, ora possiamo fare di meglio
 */
function booking(price, numGuets) {
  numGuets = numGuets || 1;
  const obj = {
    price,
    numGuets,
  };
  bookings.push(obj);
}

console.log(bookings);

/**
 * da ES6 in poi possiamo dare dei valori di default direttamente quando dichiariamo i
 * parametri all'interno della funzione, e possiamo anche mixarli tra di loro solo se quelli
 * che ci servono sono stati diciarati prima
 */
function booking(price = 100, numGuets = 5, totalPrice = price * numGuets) {
  numGuets = numGuets || 1;
  const obj = {
    price,
    numGuets,
    totalPrice,
  };
  bookings.push(obj);
}

bookings.pop();

booking();

console.log(bookings);

/**
 * first class and higher order functions
 * first class functions:
 *  first class functions significa che le funzioni sono trattate esattamente come un valore.
 *  In particolare in js le funzioni sono oggetti questo comporta una serie di conseguenze interessanti :
 *  per esempio le funzioni hanno delle proprietà (come nome arguments ecc).
 *  possiamo salvarle in delle variabili o le possiamo passare come argomento di altre funzioni,
 *  possiamo anche tornare funzioni da dentro altre funzioni.
 *  Inoltre poiche le funzioni in js sono oggetti e gli oggetti possono avere metodi, anche delle funzioni possono
 *  avere dei metodi . possiamo inoltre chiamare funzioni che agiscono su altre funzioni
 *  higher order functions :
 *  sono funzioni che ricevono come argomenti altre funzioni o funzioni che ritornano altre funzioni.
 *  le higher class function possono esistere solo perche esistono le first class function ( ovvero perche le funzioni sono
 *  trattate come argomenti)
 *
 * vediamo in pratica come funzionano le higher order functions e come crearle
 */

const f1 = function (str) {
  console.log('sono la funzione 1 stampo ' + str);
};

const f2 = function () {
  console.log('sono la funzione 2 stampo ' + str);
};

const higherLevelf = function (fn, str) {
  fn(str);
  console.log(fn.name);
};

higherLevelf(f1, 'ciao');

/**
 * funzioni che ritornano funzioni
 */

const greet = function (greeting) {
  const person = function (name) {
    console.log(`${greeting} ${name}`);
  };
  return person;
};
/**
 * questa funzione se eseguita non stampa niente a terminale perche ?
 * perche questa funzione non sta e seguendo la funzione person ma la sta solo ritornando
 * proprio come se fosse una variabile qualsiasi.
 */
greet('hey');

/**
 * da notare che greet verra salvato con tutto il parametro !
 * ma come fa a funzionare e a salvare il parametro della funzione precedente ?
 * è grazie a qualcosa chiamto closure
 */
const greeter = greet('hey');
console.log(greeter);

greeter('mirco');
greet('ciao')('mirco');

/**
 * proviamo a scriverla con le arrow functions
 */
const greetArrow = greeting => {
  const personArrow = name => {
    console.log(`${greeting} ${name}`);
  };
  return personArrow;
};

const greeterArrow = greetArrow('hey');
greeterArrow('mirco');

/**
 * oppure cosi
 */
const newGreeterArrow = greet => name => console.log(`${greet} ${name}`);
newGreeterArrow('hey')('mirco');
