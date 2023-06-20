'use strict';
/**
 * in javascript esistono altre 2 strutture dati oltre ad array  e oggetti e sono
 * sets e map !In questo file vediamo i sets
 * i sets sono collezioni di valori univoci dove l'ordine non conta
 */

const menu = [
  'pizza',
  'pasta',
  'gnocchi',
  'pizza',
  'gnocchi',
  5,
  5,
  6,
  7,
  8,
  7,
  6,
];

const set = new Set(menu);
console.log(set);

console.log(new Set('mirco'));
// notare che per i set il numero di elementi si chiama size e non lenght come per gli array
console.log(new Set('mirco').size);

// simile al metodo includes per gli array
console.log(set.has(8));

// simile a push per gli array
set.add(10);
set.add(10);
console.log(set);

set.delete(10);

/**
 * è possibile prendere gli elementi di un set come prendiamo gli elementi di un array ?
 * tipo set[0] opppure set[1] ecc ? NO non importa il numero che mettiamo, equesto perche
 * nei sets non ci sono gli indici. Nonostante questo i sets sono iterable e quindi
 * possiamo ciclare
 */

for (const val of set) console.log(val);

/**
 * a cosa potrebbero servire questi insiemi univoci ordinati ?
 * l'uso principale è rimuovere i valori duplicati in un array. Con i set è possibile
 * utilizzare lo spread operator
 */

console.log(...set);
