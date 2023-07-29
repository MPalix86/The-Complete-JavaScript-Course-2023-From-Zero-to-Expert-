'use strict';

const array = [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
];

/**
 * questo è chiamato for-of loop, è importante notare che nel for-of  è possibile continuare ad usare il break
 * e il continue, è importante sottolinearlo perche in altri tipo di for loop questo non è possibile
 * */
for (const item of array) {
  console.log(`${item}`);
}

// se vogliamo ottenere un indice ?
for (const item of array.entries()) {
  console.log(item);
}

// ma cos'è menu.entries
console.log(array.entries()); // restituisce una Array Iterator object
// usiamo lo spread operator per ispezionarlo
console.log(...array.entries());

// ora che sappiamo cosa fa il metodo entries
for (const item of array.entries()) console.log(`${item[0] + 1}  : ${item[1]}`);

// ma dati che sappiamo cosa fa .entries() ( ovvero ci per ogni  elemento dell'array ritorna un nuovo array contenente l'indice e l'elemento effettivo)
// e che conosciamo il destructuring possiamo fare :
for (const [i, el] of array.entries()) console.log(`${i + 1} : ${el}`);
