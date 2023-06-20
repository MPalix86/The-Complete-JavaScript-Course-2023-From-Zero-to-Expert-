'use strict';
const nome = 'mirco';
// console.log(nome[0]);
// console.log(nome[1]);
// console.log(nome[2]);
// console.log('luca'[0]);
// console.log(nome.length);

const frase = 'buongiorno come stai ? ';

/**
 * INDEX OF
 */
// restituisce l'indicce della prima occorrenza
console.log(frase.indexOf('o'));
console.log(frase.lastIndexOf('o'));
console.log(frase.indexOf('come'));

/**
 * SLICE
 */
// estrarre parte di stringhe usando slice
console.log(frase.slice(10));
console.log(frase.slice(10, 15));

// inizia a contare dalla fin
console.log(frase.slice(-2));

// taglio i primi 2 e gli ultimi e prendo quello che c'è in mezzo
console.log(frase.slice(2, -2));

/**
 * le stringhe sono un tipo primitivo ! Allora perche abbiamo i metodi ? i metodi non
 * dovrebbero esserci solo sugli oggetti ?
 *
 * Si è esattamente cosi e ogni volta che chiamiamo un metodo su una stringa, js converte
 * automaticamente la stringa in Stringa(oggetto). Questo processo è chiamato Boxing
 * dopo aver eseguito l'azione l'oggetto viene riconvertito in primitiva
 */

const frase1 = ['bella', 'cia', frase].join(' ');
console.log(frase1);

/**
 * PADDING
 * padding a string significa aggiungere un certo numero di caratteri finche la stringa
 * non raggiunge un certo numero di caratteri.
 * lo possiamo usare ad esempio per visualizzare un numero di telefono con le ultime cifre non
 * nascoste ad *******674
 */
console.log(frase1.padStart(100, '+'));
