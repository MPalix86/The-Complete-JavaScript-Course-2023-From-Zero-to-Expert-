/**
 * prima di tutto perche gli array hanno metodi ?
 * il fatto stesso che abbiano metodi dovrebbe darci la risposta ! Gli oggetti hanno metodi quindi gli array sono di fatto delgi oggetti !
 */

const arr = [23, 34, 5, 67, 8, 9, 34];

/**
 * SLICE
 *
 * il primo metodo è slice, che ci permette di prendere una parte di array senza cambiare l'array originale
 */

console.log(arr.slice(2, 4));
console.log(arr.slice(-2, -4)); // ritorna un pezzo di array a partire da destra
console.log(arr.slice(-1)); // prendo solo l'ulltimo elemento
console.log(arr.slice()); // in questo modo possiamo creare una copia superficiale dell'array
console.log([...arr]); // anche questo crea una copia superficial (usando lo spread operator)

/**
 * SPLICE
 *
 * funziona esattanente come slice, ma a differenza di slice MODIFICA l'array originale !
 */

console.log(arr.splice(1, 2));

/**
 * REVERSE
 *
 * come dice la parola inverte gli elementi delkl'array e anche questo come SPLICE modifica l'array originale
 */

console.log(arr.reverse());

/**
 * CONCAT
 *
 * concatena all'array che chiama la funzione un'altro array !
 */

arr2 = [6, 7, 8, 9, 12];
console.log(arr.concat(arr2));

/**
 * il concatenamento si ppuo fare anche tramite lo spread operator, tuttavia la differenza fondamentale è che con lo spread operator
 * non si muta nessun array
 */
console.log([...arr, ...arr2]);

/**
 * JOIN
 *
 * aggiunge prima di ogni elemento nell'array quello che passiamo come argomento al join
 */

console.log(arr2.join(' bella '));
