'use strict';
// il nullish coaleshing operator ha la stessa identica idea dello short circuiting per quanto riguarda l'OR o l'AND
// ma con la differenza che non ragiona con i falsy values ma con i nullish values

let minimoNumero = 0;
// quello che volgio è se esiste un numero minimo prendilo altrimenti te lo do io

console.log(minimoNumero || 10);
// il risultato è 10 anche se zero è assolutamente accettabile ( ma è considerato un falsy values)
// ecco quindi il ?? operator che non controlla se i valori sono falsi o veri ma se sono null o undefined
// in sostanza con ?? possiamo usare 0 e ''
console.log(minimoNumero ?? 10);

// questo tipo di sintassi è stata aggiunta in ES2021 ed praticamente un'assegnazione veloce condizionale
minimoNumero ||= 10;
// la stessa cosa si puo fare con &&

// la stessa cosa si puo fare con ??
console.log(minimoNumero);

minimoNumero = 0;
minimoNumero ??= 10;
console.log(minimoNumero);
