'use strict';
// il rest operator è esattamente il contrario dello spreadOperator, in pratica si parte
// da un insieme di parametri e li mette tutti dentro un nuovo array
// il rest ha esattamente la stessa identica sintassi dello spread operator ovvero ...[]
// l'unica differenza è che lo spread operator si trova sempre alla destra dell'uguale
// mentre il rest alla sinistra

const arr = [1, 2, 3, 4];
console.log(arr);

// a e b vengono destrutturati normalmente in 1 e 2 e tutti gli altri vengono uniti in un
// array di nome others
const [c, d, e] = arr;

const restaurant = {
  menuPrimi: ['pizza', 'risotto', 'pasta', 1, 2, 3, 4],
  menuPizze: ['margherita', 'patapizza', '4stagioni', 1, 2, 3],
  apertura: '22:30',
  chiusura: '24:00',
};

// prima dell'uguale sto aggregando tutto in ...othersFood,
// dopo l'uguale sto separando gli arry in elementi singoli e li sto mettendo in un nuovo
// array che è il merge degli array precedenti
// il rest operator quindi deve sempre essere l'ultimo nell'array altrimenti js da errore
const [pizza, risotto, ...othersfood] = [
  ...restaurant.menuPrimi,
  ...restaurant.menuPizze,
];
console.log(pizza, risotto, othersfood);

// il rest funziona uguale identico per gli oggetti con la differenza che i campi rimanenti
// saranno collezionati in un nuovo oggetto
const { menuPrimi, menuPizze, ...orari } = { ...restaurant };
console.log(menuPizze, menuPrimi, orari);

// se i 3 puntini quindi vengono inseriti in questo modo la funzione li prende e li aggrega
const add = function (...params) {
  console.log(params);
};
add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4);
add(1, 2, 3, 4, 5);
add(1, 2, 3, 4, 5, 6);

// notare la differenza se invece chiamo la funzione con lo spread operator, i 3 puntini hanno significato opposto
const numbers = [1, 2, 3, 4, 5, 6];

// in questo caso i 3 punti sono lo spread operator che poi verranno riaggregati perche nella
// funzione c'è il rest operator
add(...numbers);

// quindi in conclusione possiamo dire che lo spread operator lo usiamo quando vogliamo
// scrivere valori separati da virgloa
// mentre il rest quando vogliamo scrivere varibili separate da virgola
// è una distinzione molto sottile ma fa tutta la differenza del mondo
