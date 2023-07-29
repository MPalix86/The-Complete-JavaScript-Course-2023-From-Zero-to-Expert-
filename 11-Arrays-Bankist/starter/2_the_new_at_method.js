'use strict';

/**
 * per prendere un elemnto di un array oltre ala classico metodo c'è anche un metodo :
 */
const arr = [1, 2, 3, 4, 5, 6, 0];
console.log(arr[0]);
console.log(arr.at(0));

/**
 * c'è una particolarità in questo metodo che lo rende piu comodo del classico modo,
 * ammettiamo che volgaimo prendere l'ultimo elemento dell'array
 */

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

/**
 * inoltre ammettiam che si voglia fare un metohods chaining ( che vedremo dopo ), con at è possibile farlo.
 * inoltre questo metodo funziona anche per le stringhe
 */
