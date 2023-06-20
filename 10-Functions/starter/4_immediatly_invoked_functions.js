'use strict';

/**
 * qualche volta in javascript abbiamo bisongo di una funzione che viene eseguita solo e soltanto una volta
 * per ora questo potrebbe sembrare non avere senso, ma piu in la ci servira per le cose aync and await
 * possiamo definire la funzione ed eseguirla una sola volta !
 */

function runOnce() {
  console.log('test');
}
runOnce();

/**
 * tuttavia niente ci impedisce di poterla riscrivere e rieseguire anche per errore.
 * per far si che una funzione venga dichiarata ed eseguita nello stesso momento senza pero essere
 * salvata per eventuali esecuzioni future facciamo :
 */

(function () {
  console.log('testRunOnce');
})();

/**
 * notare le parentesi aperte e chiuse alla fine, senza infatti la funzione non verra eseguita.
 * questo pattern è chiamo the immediatly invoke function expression.
 * lo stesso funziona per una arrow function.
 * Ma a cosa serve questo pattern ?
 * Sappiamo che le funzioni creano uno contesto (scope (non si sta parlando di this))
 * e uno scope non puo accedere alle variabili di un inner scope
 * per esempio
 */

(function () {
  console.log('scope test');
  const test = 'varibile di test per lo scope';
});

// console.log(test) dara errore

/**
 * all'esterno della funzione non avro accesso alla variabile test
 * cos' altro crea uno scope ?
 * let e const dichiarate in un blocco di codice creano uno scope a parte, cosa che non vale per var !!
 */

{
  let test = 'block code test'; // privata non accessibile dall'esterno
  const test1 = 'block code test 1 '; // privata non accessibile dall'esterno
  var test2 = 'block code test3'; // acecssibile dall'esterno
}
console.log(test2);

/**
 * successivamente vedremo perche conviene sempre usare le IIFE rispetto a definire uno scope come sopra
 * {
 *  ...
 *  ...
 * }
 */
