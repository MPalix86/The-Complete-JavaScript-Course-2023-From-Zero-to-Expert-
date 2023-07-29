/**
 * radice quadrate
 */
console.log(Math.sqrt(25));

/**
 * lo stesso risultato puo essere raggiunto usando l'operatore esponente
 */
console.log(25 ** (1 / 2));

/** trovare il massimo */
console.log(Math.max(14, 45, 6, 7, 97));

/**
 * constanti in Math
 */

console.log(Math.PI);

/**
 * rimuovere la parte decimale
 *
 * Math.random(restituisce un numero tra 0 e 1)
 */

console.log(Math.trunc(Math.random() * 6));

/**
 * rounding integers
 */
console.log(Math.trunc(23.7));

/**
 * arrotonda all'intero piu vicino
 */
console.log(Math.round(23.7));
console.log(Math.round(23.2));

/**
 * arrotonda al prossimo intero piu vicino
 */
console.log(Math.ceil(23.7));
console.log(Math.ceil(23.2));

/**
 * floor SOLO PER I NUMERI POSITIVI funziona esattamente come trunc
 */
console.log(Math.floor(-23.3)); // arrotonda a -24
console.log(Math.trunc(-23.2)); // arrotonda a -23

/**
 * arrotondare decimale
 * da notare che il toFixed ritorna una stringa e non un numero
 */
console.log((2.34).toFixed(1)); // arrotonda a 2.3
console.log((2.34).toFixed(2)); // arrotonda a 2.34
