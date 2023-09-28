'use strict';
// il rest operator è esattamente il contrario dello spreadOperator:
// in pratica, parte da un insieme di parametri e li mette tutti dentro un nuovo array
// il rest ha esattamente la stessa identica sintassi dello spread operator ovvero ...[]
// l'unica differenza è che lo spread operator si trova sempre alla destra dell'uguale mentre il rest alla sinistra

const arr = [1, 2, 3, 4];
console.log(arr);

// a e b vengono destrutturati normalmente in 1 e 2 e tutti gli altri vengono uniti in un
// array di nome others
const [a, b, ...others] = arr;

const restaurant = {
  menuPrimi: ['pizza', 'risotto', 'pasta', 1, 2, 3, 4],
  menuPizze: ['margherita', 'patapizza', '4stagioni', 1, 2, 3],
  apertura: '22:30',
  chiusura: '24:00',
};

// prima dell'uguale sto aggregando tutto in ...othersFood,
// dopo l'uguale sto separando gli arry in elementi singoli e li sto mettendo in un nuovo
// array o delle variabili o quello che si vuole fare.
// il rest operator deve sempre essere l'ultimo nell'array altrimenti js da errore
const [pizza, risotto, ...othersfood /** rest operator */] = [
  ...restaurant.menuPrimi /** spread operator */,
  ...restaurant.menuPizze /** spread operator */,
];
console.log(pizza, risotto, othersfood);

// il rest funziona uguale identico per gli oggetti con la differenza che i campi rimanenti
// saranno collezionati in un nuovo oggetto
const { menuPrimi, menuPizze, ...orari } = { ...restaurant };
console.log(menuPizze, menuPrimi, orari);

// possiamo usare il rest operator anche all'interno dei parametri di una funzione
const add = function (...params) {
  console.log(params);
};
add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4);
add(1, 2, 3, 4, 5);
add(1, 2, 3, 4, 5, 6);

// notare la differenza:
// Se invoco la funzione con lo spread operator, i 3 puntini hanno significato opposto.
// quindi per quanto riguarda le funzioni se trovo ... nella dichiarazione il rest operator, se li trovo nell'invocazione è lo spread
// ( appunto personale: non mi sembra molto furbo fare 2 cose opposte, anche se collegate con lo stesso operatore.  )
const numbers = [1, 2, 3, 4, 5, 6];

// in questo caso i 3 punti sono lo spread operator che separa i singoli valori che poi successivamente verranno riaggregati perche nella
// funzione c'è il rest operator
add(...numbers);

// quindi in conclusione possiamo dire che lo spread operator lo usiamo quando vogliamo
// scrivere VALORI separati da virgloa
// mentre il rest quando vogliamo scrivere VARIABILI separate da virgola
// è una distinzione molto sottile...
