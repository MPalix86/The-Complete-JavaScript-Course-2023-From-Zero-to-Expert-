'use strict';

/**
 * MAP
 *
 * map è molto simimile al foreach con la differenza che crea un nuovo array, ovvero per ogni elemento applica la funzione che specifichiamo
 * (come nel foreach ) ma mappa il risultato in un nuovo array
 *
 * vogliamo convertre glie elemnti da euro in dollari
 */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
let converted = movements.map(function (el) {
  return el * eurToUsd;
});
console.log(converted);

/**
 * ovviamente si puo anche fare con un for normale, ma questo è piu un linea con la functional programming (che è qualcosa che vedremo dopo)
 *
 * la stessa cosa si puo fare con le arrow functions
 * volendo il map ha acecsso agli stessi parametri del foreach (el,i,array)
 */

converted = movements.map(el => el * eurToUsd * 2); // giusto per vedere la differenza);
console.log(converted);

/**
 * se non mettiamo le graffe non c'è bisogno di mettere il return e tutto risulta piu pulito
 */

/**
 * FILTER
 *
 * è usato per filtrare l'array e trovare elementi che soddisfano certe condizioni, anche in questo caso il risultato verra
 * salvato in un nuovo array
 * anche filter funziona con le callback
 */

const deposit = movements.filter(function (el) {
  return el > 0;
});

/**
 * REDUCE
 *
 * riduce l'array applicando alcune operazioni ritornando un solo valore ( come ad esempio somma di tutti gli elementi)
 * la callback prende come parametri: un accumulatore ,il valore corrente, l'indice e l'array per intero
 * mentre la reduce prende come paramatri la callback e il valore iniziale dell'accumulatore
 */

const res = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);

/**
 * FIND
 *
 * il metodo find ci permette di cercare un determinato elemento che
 * rispetta alcune condizioni. Anche il find() accetta come argomento una callback. a differenza del
 * filter il find non ritorna tutti i valori che rispecchiano la condizione ma solo il primo
 */

let el = movements.find(function (el) {
  return el < 0;
});
console.log('el' + el);

/**
 * FINDINDEX
 * il metodo findIndex funziona esattamente come il find, ma ritorna un'indice piuttosto che il varolre
 * notare che la condizione può essere una qualsiasi cosa che ritorna true o false
 */

el = movements.findIndex(function (el) {
  return el < 0;
});
console.log('el' + el);

/**
 * SOME AND EVERY
 * possiamo usare il metodo include per vedere se dentro un array c'è un determinato elemento ,tuttavia
 * possiamo solo testare l'uguaglianza !
 * e se volessimo sapere se c'è qualche deposito nel nostro array di movimenti bancari ?
 * basta usare some che ritorna true o false se c'è almeno un elemento che rispetta la condizione.
 * EVERY fa la stessa cosa ma solo se tutti gli elementi rispettano la condizione
 */

const anyDeposit = movements.some(mov => mov > 0);
console.log(anyDeposit);

/**
 * FLAT
 * se abbiamo un array come questo e volessimo ottenere un nuovo array (senza nested array) che contiene
 * tutti glie elementi ? basta usare il metodo flat
 */

const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9, 0];
console.log(arr.flat());

/**
 * supponiamo di avere un array che ha nested array su piu di un livello.
 * Il flat() funziona solo per gli array nested ad un livello se vogliamo scendere a livelli
 * inferiore basta specificare il livello nel parametro di flat
 */

const arrDeep = [[1, [2, 3], 4], 5, [6, 7, [8, [9]]]];
console.log(arrDeep.flat(3));

/**
 * SORTING ARRAY
 * usiamo il metodo sort. Questo metodo non restituisce un nuovo array ma cambia effettivamente
 * l'array sul quale si usa
 */

const owners = ['mirco', 'paolo', 'gianluca'];
console.log(owners.sort());

/**
 * è possibile specificare un callback con un metodo di sort personalizzato, questa callback
 * prenderà in input 2 parametri che sono l'elemento attuale i e il successivo,
 * che chiameremo a e b, se la nostra callback ritornerà < 0 a sara messo prima di b e viceversa
 * se ritorniamo 0 la posizione rimarra invariata
 */

const numbers = [4, 8, 6, 7, 98, 43, 57, 45, 3, 46, 76, 5, 1];
numbers.sort((a, b) => {
  if (a < b) return -1;
  else return 1;
});

console.log(numbers);

/**
 * how to programmatically create and fills arrays ?
 * const x = new Array(7); non crea un array con un solo elemento ma un array di 7 elemnti vuoto
 * inoltre su unarray vuoto del genere non possiamo usare i metodi visti in precedenza. Quindi è
 * praticamente inutile, tranne per un metodo, il metodo fill()
 */
let x = new Array(7);
console.log(x);

x.fill(1);
console.log(x);

/**
 * questo mi lascia 3 elementi vuoti  e riempie tutti i restanti con 1
 */
x = new Array(7);
console.log(x.fill(1, 3));

/**
 * lascia 3 elementi e riempie tutto di uno fino al 5 elemento
 */
x = new Array(7);
console.log(x.fill(1, 3, 5));

/**
 * in questo caso non stiamo usando un metodo su un array, ma lo stiamo usando sul costruttore !
 * questa funzione prende come argomento la lunghezza e una mapping function
 */

const arrayGenerated = Array.from({ lenght: 7 }, function (cur, i) {
  return i;
});
console.log(arrayGenerated);
