'use strict';

/**
 * abbiamo imparato il for-off ma il foreach è sostanzialmente differente .
 */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/**
 * supponiamo di voler iterare su questo array per stampare qualcosa per ogni iterazione.
 * facciamolo prima con il for-off
 */
for (const movement of movements) {
  movement < 0 && console.log('conto in rosso');
  movement > 0 && console.log('bella');
}

/**
 * il foreach è una sostanzialmente una "higher order function"  prende in input un'altra funzione che verrà eseguita per ogni elemento ( callback )
 */
console.log('FOREACH');
movements.forEach(function (el) {
  console.log(el);
});

/**
 * e se avessimo bisogno di un contatore ? In realta il foreach passa come argomento anche l'indice e l'interro array sul quale stiamo iterando !
 * tuttavia nel foreac NON FUNZIONANO i break e i continue e non c'è assolutamente modo di fermare l'esecuzione del loop e di andare avanti
 * di una iterazione
 */
movements.forEach(function (el, i, array) {
  console.log(`el : ${i} ----> ${el}`);
});
