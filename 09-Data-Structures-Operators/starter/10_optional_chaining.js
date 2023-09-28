'use strict';

const settimana = {
  lun: {
    nome: 'lunedi',
    tempo: 'bello',
  },
  mer: {
    tempo: 'bello',
  },
  gio: {
    nome: 'giovedi',
    tempo: 'bello',
  },
};

/**
 * immaginiamo di ricevere oggetti da alcune api e ci sono alcuni campi non obbligatori
 * come ad esempio il nome, che dentro mer non c'è
 * per verificare possiamo fare :
 *
 */

// console.log(settimana.mer.nome);

/**
 * console.log(settimana.mer.nome);
 * in questa linea di codice cosa succede ?
 * 1) si accede all'oggetto settimana che esiste
 * 2) si accede all'oggetto mar che non esiste, tuttavia, il compilatore non ritorna errore perche quando un oggetto
 *    non esiste ritorna undefined
 * 3) prova ad accedere alla proprietà tempo di undefined !  qui il compilatore riporta errore (Cannot read properties of undefined)
 *    e blocca l'esecuzione del programma.
 * per risolvere questo dovrei fare :
 */

if (settimana.mar && settimana.tempo) console.log(settimana.mar.tempo);

/**
 * questo rende pero il codice brutto e messy (immagina di avere decine di proprieta indentate da controllare)
 * a questo punto dovrei scrivere per ogni proprieta 2-3 if indentati uno dentro l'altro per verificare tutto .
 * ecco quindi che possiamo usare l'optional chaining operator ?.
 * questo operatore è stato introdotto in ES2020
 * questo operatore semplicemente ritorna undefined appena trova il primo valore undefined e blocca tutte le operazioni successive
 */

console.log(settimana.mar?.tempo);

/**
 * solo se la proprieta prima del ?. esiste si prova a legegre la successiva !
 * in questo caso : solo se settimana.mar esiste (non è undefined o null) si prova a
 * subito undefined e si evita un errore e decine e decine di controlli.
 * infatti se ad esempio mar fosse undefined
 * = >settimana.mar.tempo
 * js proverebbe a leggere la propprita tempo di mar ( che è undefined ) generando quindi l'errore cannot read property of undefined
 * se invece usiamo il ?.
 * => settimana.mar?.tempo
 * a questo punto js poiche mar è undefined ritorna undefined senza provare a leggere tempo evitando l'errore
 * in altre parole appena si incontra una proprieta che non esiste (undefined) o che è null viene ritornato undefined
 * e non si leggono le successive
 */

/**
 * ora vediamo come l'operatore "?."" fuzina anche con le proprietà calcolate e come funziona in accoppiata con ?? (nullish cohaleshing)
 * questi 2 operatori infatti sono stati introdotti insieme in ES2020 e sono stati progettati per funzionare bene insieme
 */
const days = ['lun', 'mar', 'mer', 'gio', 'ven'];

for (const day of days) {
  let tempo = settimana[day]?.tempo ?? 'nessuna previsione';
  console.log(`tempo ${day} : ${tempo} `);
}

// questo operatore funziona anche per i metodi e ci permette di verificare se un metodo è definito o no
console.log(settimana.contaGiorni?.() ?? 'metodo non esiste');

// lo possiamo usare anche sugli array
const users = [
  { name: 'mirco', mail: 'mircopalese@gmail.com' },
  { name: 'luca', mail: 'luca@gmail.com' },
];

console.log(users?.[3] ?? 'non esiste users[3]');
